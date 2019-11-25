import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddamountComponent } from './addamount.component';

describe('AddamountComponent', () => {
  let component: AddamountComponent;
  let fixture: ComponentFixture<AddamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
