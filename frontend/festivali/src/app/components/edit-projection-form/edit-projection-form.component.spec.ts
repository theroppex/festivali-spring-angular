import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectionFormComponent } from './edit-projection-form.component';

describe('EditProjectionFormComponent', () => {
  let component: EditProjectionFormComponent;
  let fixture: ComponentFixture<EditProjectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
