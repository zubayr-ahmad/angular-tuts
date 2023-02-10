import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut52Component } from './tut52.component';

describe('Tut52Component', () => {
  let component: Tut52Component;
  let fixture: ComponentFixture<Tut52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut52Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
