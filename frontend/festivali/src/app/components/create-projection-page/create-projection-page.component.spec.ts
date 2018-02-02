import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectionPageComponent } from './create-projection-page.component';

describe('CreateProjectionPageComponent', () => {
  let component: CreateProjectionPageComponent;
  let fixture: ComponentFixture<CreateProjectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
