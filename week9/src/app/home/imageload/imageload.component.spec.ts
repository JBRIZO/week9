import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageloadComponent } from './imageload.component';

describe('ImageloadComponent', () => {
  let component: ImageloadComponent;
  let fixture: ComponentFixture<ImageloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
