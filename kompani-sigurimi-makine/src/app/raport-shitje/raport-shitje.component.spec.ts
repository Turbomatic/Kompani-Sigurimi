import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportShitjeComponent } from './raport-shitje.component';

describe('RaportShitjeComponent', () => {
  let component: RaportShitjeComponent;
  let fixture: ComponentFixture<RaportShitjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaportShitjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaportShitjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
