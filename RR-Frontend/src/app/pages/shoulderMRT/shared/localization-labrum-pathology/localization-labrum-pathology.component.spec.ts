import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizationLabrumPathologyComponent } from './localization-labrum-pathology.component';
import { LocalizationLabrumPathology } from '@models/shoulderMRT/ui/localization-labrum-pathology/localization-labrum-pathology.model';

describe('LocalizationLabrumPathologyComponent [localizer]', () => {
  let component: LocalizationLabrumPathologyComponent;
  let fixture: ComponentFixture<LocalizationLabrumPathologyComponent>;
  let labrumPathologyLocalizations: LocalizationLabrumPathology;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [LocalizationLabrumPathologyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizationLabrumPathologyComponent);
    component = fixture.componentInstance;
    labrumPathologyLocalizations = new LocalizationLabrumPathology();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(labrumPathologyLocalizations);
  });
});
