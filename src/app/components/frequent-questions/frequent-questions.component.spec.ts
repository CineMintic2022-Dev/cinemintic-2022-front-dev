import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FrequentQuestionsComponent } from './frequent-questions.component';


describe('FrequentQuestionsComponent', () => {
  let component: FrequentQuestionsComponent;
  let fixture: ComponentFixture<FrequentQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentQuestionsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
      imports: 
      [
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
