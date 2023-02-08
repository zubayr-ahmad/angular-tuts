import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut40Component } from './tut40.component';

describe('Tut40Component', () => {
  let component: Tut40Component;
  let fixture: ComponentFixture<Tut40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut40Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
