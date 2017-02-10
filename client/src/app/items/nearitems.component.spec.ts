/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NearitemsComponent } from './nearitems.component';

describe('NearitemsComponent', () => {
  let component: NearitemsComponent;
  let fixture: ComponentFixture<NearitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
