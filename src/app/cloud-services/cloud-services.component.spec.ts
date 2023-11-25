import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServicesComponent } from './cloud-services.component';

describe('CloudServicesComponent', () => {
  let component: CloudServicesComponent;
  let fixture: ComponentFixture<CloudServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudServicesComponent]
    });
    fixture = TestBed.createComponent(CloudServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
