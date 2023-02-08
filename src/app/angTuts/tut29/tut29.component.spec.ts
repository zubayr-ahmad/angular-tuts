import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut29Component } from './tut29.component';

describe('Tut29Component', () => {
  let component: Tut29Component;
  let fixture: ComponentFixture<Tut29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut29Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
