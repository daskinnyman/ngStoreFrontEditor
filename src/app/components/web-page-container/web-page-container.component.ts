import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicWebPageDirective } from 'src/app/core/directives/dynamic-web-page.directive';
import { BaseComponent } from 'src/app/core/interfaces/base.component.interface';
import { BaseElementComponent } from '../base/baseElement.component';

@Component({
  selector: 'app-web-page-container',
  templateUrl: './web-page-container.component.html',
  styleUrls: ['./web-page-container.component.scss'],
})
export class WebPageContainerComponent implements OnInit {
  @Input() webPageConfig: BaseElementComponent[] = [];
  @ViewChild(DynamicWebPageDirective, { static: true }) dynamicWebPage:
    | DynamicWebPageDirective
    | undefined;

  config: BaseElementComponent[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.config = [...this.webPageConfig];

    this.createComponent();
  }

  createComponent() {
    if (!this.dynamicWebPage) {
      return;
    }

    const viewContainerRef: ViewContainerRef =
      this.dynamicWebPage.viewContainerRef;
    viewContainerRef.clear();
    this.config.forEach((component: BaseElementComponent) => {
      this.loadComponent(component);
    });
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

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.config, event.previousIndex, event.currentIndex);
    this.createComponent();
  }
}
