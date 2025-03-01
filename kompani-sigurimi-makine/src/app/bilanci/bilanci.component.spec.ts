import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanciComponent } from './bilanci.component';

describe('BilanciComponent', () => {
  let component: BilanciComponent;
  let fixture: ComponentFixture<BilanciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BilanciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
