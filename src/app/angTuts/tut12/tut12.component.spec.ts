import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut12Component } from './tut12.component';

describe('Tut12Component', () => {
  let component: Tut12Component;
  let fixture: ComponentFixture<Tut12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
