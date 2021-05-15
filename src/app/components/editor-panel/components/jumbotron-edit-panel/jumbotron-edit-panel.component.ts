import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/core/services/editor.service';

@Component({
  selector: 'app-jumbotron-edit-panel',
  templateUrl: './jumbotron-edit-panel.component.html',
  styleUrls: ['./jumbotron-edit-panel.component.scss'],
})
export class JumbotronEditPanelComponent implements OnInit {
  editorProps: any = null;
  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.editorService.editorProps.subscribe((el) => (this.editorProps = el));
  }
}
