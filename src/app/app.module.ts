import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicWebPageDirective } from './core/directives/dynamic-web-page.directive';
import { WebPageContainerComponent } from './components/web-page-container/web-page-container.component';
import { TextComponent } from './components/text/text.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { EditorPanelComponent } from './components/editor-panel/editor-panel.component';
import { JumbotronEditPanelComponent } from './components/editor-panel/components/jumbotron-edit-panel/jumbotron-edit-panel.component';
import { ProductListEditPanelComponent } from './components/editor-panel/components/product-list-edit-panel/product-list-edit-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicWebPageDirective,
    WebPageContainerComponent,
    TextComponent,
    JumbotronComponent,
    ProductListComponent,
    EditorPanelComponent,
    JumbotronEditPanelComponent,
    ProductListEditPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, DragDropModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
