import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFestivalPageComponent } from './create-festival-page.component';

describe('CreateFestivalPageComponent', () => {
  let component: CreateFestivalPageComponent;
  let fixture: ComponentFixture<CreateFestivalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFestivalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFestivalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
