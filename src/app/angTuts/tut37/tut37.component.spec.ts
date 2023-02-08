import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut37Component } from './tut37.component';

describe('Tut37Component', () => {
  let component: Tut37Component;
  let fixture: ComponentFixture<Tut37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut37Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
