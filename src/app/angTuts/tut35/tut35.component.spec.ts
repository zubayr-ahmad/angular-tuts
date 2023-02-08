import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut35Component } from './tut35.component';

describe('Tut35Component', () => {
  let component: Tut35Component;
  let fixture: ComponentFixture<Tut35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut35Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
