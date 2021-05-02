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
  @Input() webPageConfig: BaseElementComponent[] | any;
  @ViewChild(DynamicWebPageDirective, { static: true }) dynamicWebPage:
    | DynamicWebPageDirective
    | any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.createComponent();
  }

  createComponent() {
    this.webPageConfig.forEach((component: BaseElementComponent) => {
      this.loadComponent(component);
    });
  }

  loadComponent(component: BaseElementComponent) {
    const componentFactory: ComponentFactory<BaseComponent> = this.componentFactoryResolver.resolveComponentFactory(
      component.component
    );
    const viewContainerRef: ViewContainerRef = this.dynamicWebPage
      .viewContainerRef;

    const componentRef = viewContainerRef.createComponent<BaseComponent>(
      componentFactory
    );

    componentRef.instance.data = component.data;
  }
}
