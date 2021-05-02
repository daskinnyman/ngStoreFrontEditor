import { Component } from '@angular/core';
import { BaseElementComponent } from './components/base/baseElement.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TextComponent } from './components/text/text.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'storeFrontEditorPoc';
  webComponent = [
    new BaseElementComponent(JumbotronComponent, {
      imgSrc:
        'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
      bio: 'Brave as they come',
    }),
    new BaseElementComponent(TextComponent, {
      name: 'Bombasto1',
      bio: 'Brave as they come',
    }),
    new BaseElementComponent(ProductListComponent, {
      name: '熱銷商品',
      products: [
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
    }),
  ];
}
