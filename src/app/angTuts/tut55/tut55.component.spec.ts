import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut55Component } from './tut55.component';

describe('Tut55Component', () => {
  let component: Tut55Component;
  let fixture: ComponentFixture<Tut55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut55Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
