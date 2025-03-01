import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportetComponent } from './raportet.component';

describe('RaportetComponent', () => {
  let component: RaportetComponent;
  let fixture: ComponentFixture<RaportetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaportetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaportetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
