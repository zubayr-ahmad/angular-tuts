import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut54Component } from './tut54.component';

describe('Tut54Component', () => {
  let component: Tut54Component;
  let fixture: ComponentFixture<Tut54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut54Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
