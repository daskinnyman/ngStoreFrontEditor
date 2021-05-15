import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/interfaces/base.component.interface';
import { EditorService } from 'src/app/core/services/editor.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit, BaseComponent {
  @Input() data: any;

  constructor(private editorService: EditorService) {}
  ngOnInit(): void {}

  toggleEditorMenu() {
    this.editorService.setEditorOpen(true);
    this.data.type = 'jumbotron';
    this.editorService.setEditorProps(this.data);
  }
}
