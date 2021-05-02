import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPageContainerComponent } from './web-page-container.component';

describe('WebPageContainerComponent', () => {
  let component: WebPageContainerComponent;
  let fixture: ComponentFixture<WebPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
