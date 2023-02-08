import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut39Component } from './tut39.component';

describe('Tut39Component', () => {
  let component: Tut39Component;
  let fixture: ComponentFixture<Tut39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut39Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
