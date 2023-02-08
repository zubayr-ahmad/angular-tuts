import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut44Component } from './tut44.component';

describe('Tut44Component', () => {
  let component: Tut44Component;
  let fixture: ComponentFixture<Tut44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut44Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
