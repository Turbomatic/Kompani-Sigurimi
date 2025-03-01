import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportBlerjeComponent } from './raport-blerje.component';

describe('RaportBlerjeComponent', () => {
  let component: RaportBlerjeComponent;
  let fixture: ComponentFixture<RaportBlerjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaportBlerjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaportBlerjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
