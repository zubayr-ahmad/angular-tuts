import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut43Component } from './tut43.component';

describe('Tut43Component', () => {
  let component: Tut43Component;
  let fixture: ComponentFixture<Tut43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut43Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
