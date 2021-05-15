import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/core/services/editor.service';

@Component({
  selector: 'app-product-list-edit-panel',
  templateUrl: './product-list-edit-panel.component.html',
  styleUrls: ['./product-list-edit-panel.component.scss'],
})
export class ProductListEditPanelComponent implements OnInit {
  editorProps: any = null;
  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.editorService.editorProps.subscribe((el) => (this.editorProps = el));
  }
}
