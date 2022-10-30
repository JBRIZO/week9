import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeControlsComponent } from './like-controls.component';

describe('LikeControlsComponent', () => {
  let component: LikeControlsComponent;
  let fixture: ComponentFixture<LikeControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeControlsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
