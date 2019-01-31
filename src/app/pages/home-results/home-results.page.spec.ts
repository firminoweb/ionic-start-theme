import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResultsPage } from './home-results.page';

describe('HomeResultsPage', () => {
  let component: HomeResultsPage;
  let fixture: ComponentFixture<HomeResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
