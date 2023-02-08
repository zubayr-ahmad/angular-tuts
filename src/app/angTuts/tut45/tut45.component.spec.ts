import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut45Component } from './tut45.component';

describe('Tut45Component', () => {
  let component: Tut45Component;
  let fixture: ComponentFixture<Tut45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut45Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
