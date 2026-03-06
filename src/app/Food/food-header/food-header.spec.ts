import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHeader } from './food-header';

describe('FoodHeader', () => {
  let component: FoodHeader;
  let fixture: ComponentFixture<FoodHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
