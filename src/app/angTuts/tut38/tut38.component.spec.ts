import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut38Component } from './tut38.component';

describe('Tut38Component', () => {
  let component: Tut38Component;
  let fixture: ComponentFixture<Tut38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut38Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
