import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { EditorService } from 'src/app/core/services/editor.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() data: any;
  products: any = [];
  constructor(
    private editorService: EditorService,
    private productService: ProductService
  ) {}


  ngOnInit(): void {
    this.productService
      .getProductList(this.data.productListId)
      .pipe(
        tap((el) => console.log(el)),
        map((el) => el[0])
      )
      .subscribe((el: any) => (this.products = el.items));
  }

  toggleEditorMenu() {
    this.editorService.setEditorOpen(true);
    this.data.type = 'productList';
    this.editorService.setEditorProps(this.data);
  }
}
