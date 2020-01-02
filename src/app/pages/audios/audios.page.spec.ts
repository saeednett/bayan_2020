import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiosPage } from './audios.page';

describe('AudiosPage', () => {
  let component: AudiosPage;
  let fixture: ComponentFixture<AudiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
