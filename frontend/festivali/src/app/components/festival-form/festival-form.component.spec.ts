import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalFormComponent } from './festival-form.component';

describe('FestivalFormComponent', () => {
  let component: FestivalFormComponent;
  let fixture: ComponentFixture<FestivalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
