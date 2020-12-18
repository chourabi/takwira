import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FielddetailComponent } from './fielddetail.component';

describe('FielddetailComponent', () => {
  let component: FielddetailComponent;
  let fixture: ComponentFixture<FielddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FielddetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FielddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
