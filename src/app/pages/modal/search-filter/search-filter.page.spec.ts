import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterPage } from './search-filter.page';

describe('SearchFilterPage', () => {
  let component: SearchFilterPage;
  let fixture: ComponentFixture<SearchFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
