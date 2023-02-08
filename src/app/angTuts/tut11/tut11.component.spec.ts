import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut11Component } from './tut11.component';

describe('Tut11Component', () => {
  let component: Tut11Component;
  let fixture: ComponentFixture<Tut11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
