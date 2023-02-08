import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut32Component } from './tut32.component';

describe('Tut32Component', () => {
  let component: Tut32Component;
  let fixture: ComponentFixture<Tut32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut32Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
