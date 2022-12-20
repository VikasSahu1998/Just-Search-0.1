import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandServicesFilComponent } from './on-demand-services-fil.component';

describe('OnDemandServicesFilComponent', () => {
  let component: OnDemandServicesFilComponent;
  let fixture: ComponentFixture<OnDemandServicesFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnDemandServicesFilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnDemandServicesFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
