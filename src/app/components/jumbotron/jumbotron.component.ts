import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/interfaces/base.component.interface';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent implements OnInit, BaseComponent {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
