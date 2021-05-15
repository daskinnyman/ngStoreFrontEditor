import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListEditPanelComponent } from './product-list-edit-panel.component';

describe('ProductListEditPanelComponent', () => {
  let component: ProductListEditPanelComponent;
  let fixture: ComponentFixture<ProductListEditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListEditPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListEditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
