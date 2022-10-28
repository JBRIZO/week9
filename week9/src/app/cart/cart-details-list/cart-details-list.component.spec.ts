import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailsListComponent } from './cart-details-list.component';

describe('CartDetailsListComponent', () => {
  let component: CartDetailsListComponent;
  let fixture: ComponentFixture<CartDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
