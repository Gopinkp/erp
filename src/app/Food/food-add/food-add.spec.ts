import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAdd } from './food-add';

describe('FoodAdd', () => {
  let component: FoodAdd;
  let fixture: ComponentFixture<FoodAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
