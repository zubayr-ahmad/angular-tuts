import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut81Component } from './tut81.component';

describe('Tut81Component', () => {
  let component: Tut81Component;
  let fixture: ComponentFixture<Tut81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut81Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
