import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectionPageComponent } from './edit-projection-page.component';

describe('EditProjectionPageComponent', () => {
  let component: EditProjectionPageComponent;
  let fixture: ComponentFixture<EditProjectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
