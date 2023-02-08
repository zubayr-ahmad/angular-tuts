import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut31Component } from './tut31.component';

describe('Tut31Component', () => {
  let component: Tut31Component;
  let fixture: ComponentFixture<Tut31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut31Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
