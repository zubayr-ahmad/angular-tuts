import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut55child2Component } from './tut55child2.component';

describe('Tut55child2Component', () => {
  let component: Tut55child2Component;
  let fixture: ComponentFixture<Tut55child2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut55child2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut55child2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
