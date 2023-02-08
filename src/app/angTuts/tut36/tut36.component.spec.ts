import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut36Component } from './tut36.component';

describe('Tut36Component', () => {
  let component: Tut36Component;
  let fixture: ComponentFixture<Tut36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut36Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
