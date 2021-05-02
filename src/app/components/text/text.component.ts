import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/interfaces/base.component.interface';



@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit, BaseComponent {
  constructor() {}
  @Input() data: any;

  ngOnInit(): void {}
}
