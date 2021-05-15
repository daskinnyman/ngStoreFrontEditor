import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicWebPageDirective } from 'src/app/core/directives/dynamic-web-page.directive';
import { BaseComponent } from 'src/app/core/interfaces/base.component.interface';
import { EditorService } from 'src/app/core/services/editor.service';
import { BaseElementComponent } from '../base/baseElement.component';
import { tap } from 'rxjs/operators';
import { JumbotronEditPanelComponent } from './components/jumbotron-edit-panel/jumbotron-edit-panel.component';
import { ProductListEditPanelComponent } from './components/product-list-edit-panel/product-list-edit-panel.component';
@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.component.html',
  styleUrls: ['./editor-panel.component.scss'],
})
export class EditorPanelComponent implements OnInit {
  @ViewChild(DynamicWebPageDirective, { static: true }) dynamicWebPage:
    | DynamicWebPageDirective
    | undefined;

  config: BaseElementComponent[] = [];
  selectedPanel: BaseElementComponent | null = null;
  constructor(
    private editorService: EditorService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.editorService.editorProps
      .pipe(tap((el: any) => console.log(el)))
      .subscribe((el) => {
        console.log('yooo');
        switch (el.type) {
          case 'jumbotron':
            this.selectedPanel = new BaseElementComponent(
              JumbotronEditPanelComponent,
              el
            );

            break;
          case 'productList':
            this.selectedPanel = new BaseElementComponent(
              ProductListEditPanelComponent,
              el
            );
            break;
        }
        this.createComponent();
      });
  }

  createComponent() {
    if (!this.dynamicWebPage || !this.selectedPanel) {
      return;
    }

    const viewContainerRef: ViewContainerRef =
      this.dynamicWebPage.viewContainerRef;
    viewContainerRef.clear();
    this.loadComponent(this.selectedPanel);
  }

  loadComponent(component: BaseElementComponent) {
    if (!this.dynamicWebPage) {
      return;
    }

    const componentFactory: ComponentFactory<BaseComponent> =
      this.componentFactoryResolver.resolveComponentFactory(
        component.component
      );

    const viewContainerRef: ViewContainerRef =
      this.dynamicWebPage.viewContainerRef;

    const componentRef =
      viewContainerRef.createComponent<BaseComponent>(componentFactory);

    componentRef.instance.data = component.data;
  }

  onEditorMenuClose() {
    this.editorService.setEditorOpen(false);
  }
}
