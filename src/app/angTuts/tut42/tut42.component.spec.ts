import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut42Component } from './tut42.component';

describe('Tut42Component', () => {
  let component: Tut42Component;
  let fixture: ComponentFixture<Tut42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut42Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
