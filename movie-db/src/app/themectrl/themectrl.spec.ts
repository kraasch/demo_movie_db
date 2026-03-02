import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Themectrl } from './themectrl';

describe('Themectrl', () => {
  let component: Themectrl;
  let fixture: ComponentFixture<Themectrl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Themectrl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Themectrl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
