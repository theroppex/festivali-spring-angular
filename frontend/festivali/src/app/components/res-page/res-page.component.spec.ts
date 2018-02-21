import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResPageComponent } from './res-page.component';

describe('ResPageComponent', () => {
  let component: ResPageComponent;
  let fixture: ComponentFixture<ResPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
