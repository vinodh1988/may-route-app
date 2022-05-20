import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesTabComponent } from './quotes-tab.component';

describe('QuotesTabComponent', () => {
  let component: QuotesTabComponent;
  let fixture: ComponentFixture<QuotesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
