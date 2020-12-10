import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfeildComponent } from './addfeild.component';

describe('AddfeildComponent', () => {
  let component: AddfeildComponent;
  let fixture: ComponentFixture<AddfeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfeildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
