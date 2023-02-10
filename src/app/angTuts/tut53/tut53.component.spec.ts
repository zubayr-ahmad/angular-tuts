import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut53Component } from './tut53.component';

describe('Tut53Component', () => {
  let component: Tut53Component;
  let fixture: ComponentFixture<Tut53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut53Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
