import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationPageComponent } from './create-location-page.component';

describe('CreateLocationPageComponent', () => {
  let component: CreateLocationPageComponent;
  let fixture: ComponentFixture<CreateLocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
