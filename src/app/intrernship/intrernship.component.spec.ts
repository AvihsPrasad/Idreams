import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrernshipComponent } from './intrernship.component';

describe('IntrernshipComponent', () => {
  let component: IntrernshipComponent;
  let fixture: ComponentFixture<IntrernshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntrernshipComponent]
    });
    fixture = TestBed.createComponent(IntrernshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
