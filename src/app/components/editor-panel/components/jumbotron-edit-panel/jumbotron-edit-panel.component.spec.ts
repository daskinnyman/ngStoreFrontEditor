import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronEditPanelComponent } from './jumbotron-edit-panel.component';

describe('JumbotronEditPanelComponent', () => {
  let component: JumbotronEditPanelComponent;
  let fixture: ComponentFixture<JumbotronEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbotronEditPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
