import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tut52aComponent } from './tut52a.component';

describe('Tut52aComponent', () => {
  let component: Tut52aComponent;
  let fixture: ComponentFixture<Tut52aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tut52aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tut52aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
