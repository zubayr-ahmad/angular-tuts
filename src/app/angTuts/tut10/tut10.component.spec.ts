import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut10Component } from './tut10.component';

describe('Tut10Component', () => {
  let component: Tut10Component;
  let fixture: ComponentFixture<Tut10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
