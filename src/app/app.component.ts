import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseElementComponent } from './components/base/baseElement.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TextComponent } from './components/text/text.component';
import { EditorService } from './core/services/editor.service';

const elements = {
  components: [
    {
      type: 'jumbotron',
      data: {
        imgSrc:
          'https://images.unsplash.com/photo-1619705530795-f33ad8acab20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1949&q=80',
      },
    },
    {
      type: 'text',
      data: {
        name: 'Bombasto1',
      },
    },
    {
      type: 'productList',
      data: {
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
      },
    },
  ],
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'storeFrontEditorPoc';
  json = elements;
  isEditorMenuOpen$: Observable<boolean> | null = null;
  webComponent: BaseElementComponent[] = [];

  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.isEditorMenuOpen$ = this.editorService.editorOpen;
    this.setUpPage();
  }

  setUpPage() {
    this.json.components.forEach((component) => {
      switch (component.type) {
        case 'jumbotron':
          this.webComponent.push(
            new BaseElementComponent(JumbotronComponent, component.data)
          );
          break;
        case 'text':
          this.webComponent.push(
            new BaseElementComponent(TextComponent, component.data)
          );
          break;
        case 'productList':
          this.webComponent.push(
            new BaseElementComponent(ProductListComponent, component.data)
          );
          break;
      }
    });
  }

  onEditorMenuClose() {
    this.editorService.setEditorOpen(false);
  }
}
