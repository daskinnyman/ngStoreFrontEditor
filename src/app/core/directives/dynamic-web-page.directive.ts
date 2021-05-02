import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicWebPage]',
})
export class DynamicWebPageDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
