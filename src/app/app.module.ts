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
@NgModule({
  declarations: [
    AppComponent,
    DynamicWebPageDirective,
    WebPageContainerComponent,
    TextComponent,
    JumbotronComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
