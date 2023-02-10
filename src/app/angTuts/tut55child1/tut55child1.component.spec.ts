import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut55child1Component } from './tut55child1.component';

describe('Tut55child1Component', () => {
  let component: Tut55child1Component;
  let fixture: ComponentFixture<Tut55child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut55child1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut55child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
