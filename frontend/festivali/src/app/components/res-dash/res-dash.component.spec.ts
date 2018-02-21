import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResDashComponent } from './res-dash.component';

describe('ResDashComponent', () => {
  let component: ResDashComponent;
  let fixture: ComponentFixture<ResDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
