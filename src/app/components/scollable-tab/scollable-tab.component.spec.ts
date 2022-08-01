import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScollableTabComponent } from './scollable-tab.component';

describe('ScollableTabComponent', () => {
  let component: ScollableTabComponent;
  let fixture: ComponentFixture<ScollableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScollableTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScollableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
