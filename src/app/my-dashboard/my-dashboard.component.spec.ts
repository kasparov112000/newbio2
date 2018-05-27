
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMyDashboardComponent } from './my-dashboard.component';

describe('MyDashboardComponent', () => {
  let component: AppMyDashboardComponent;
  let fixture: ComponentFixture<AppMyDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
