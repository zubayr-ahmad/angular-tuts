import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut34Component } from './tut34.component';

describe('Tut34Component', () => {
  let component: Tut34Component;
  let fixture: ComponentFixture<Tut34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut34Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
