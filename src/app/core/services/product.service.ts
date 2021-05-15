import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
    {
      id: '5566',
      items: [
        {
          imgSrc:
            'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
          name: 'mountain View',
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
          name: 'mountain View',
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
          name: 'mountain View',
        },
      ],
    },
    {
      id: '5577',
      items: [
        {
          imgSrc:
            'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
          name: 'mama View',
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
          name: 'mama View',
        },
        {
          imgSrc:
            'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
          name: 'mama View',
        },
      ],
    },
  ];

  constructor() {}

  getProductList(productListId: string) {
    return of(this.products.filter((el: any) => el.id === productListId));
  }
}
