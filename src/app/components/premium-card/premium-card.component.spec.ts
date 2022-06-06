import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PremiumCardComponent } from './premium-card.component';


describe('PremiumCardComponent', () => {
  let component: PremiumCardComponent;
  let fixture: ComponentFixture<PremiumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
      imports: 
      [
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
