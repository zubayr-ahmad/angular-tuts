import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut41Component } from './tut41.component';

describe('Tut41Component', () => {
  let component: Tut41Component;
  let fixture: ComponentFixture<Tut41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut41Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
