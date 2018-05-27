
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMyNavComponent } from './app-my-nav.component';

describe('MyNavComponent', () => {
  let component: AppMyNavComponent;
  let fixture: ComponentFixture<AppMyNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMyNavComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppMyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  }));
  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
