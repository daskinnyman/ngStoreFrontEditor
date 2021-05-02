import { Type } from '@angular/core';

// BaseElement for webConfig
export class BaseElementComponent {
  constructor(public component: Type<any>, public data: any) {}
}

