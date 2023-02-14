import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut82Component } from './tut82.component';

describe('Tut82Component', () => {
  let component: Tut82Component;
  let fixture: ComponentFixture<Tut82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut82Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
