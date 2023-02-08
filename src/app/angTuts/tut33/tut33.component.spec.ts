import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut33Component } from './tut33.component';

describe('Tut33Component', () => {
  let component: Tut33Component;
  let fixture: ComponentFixture<Tut33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
