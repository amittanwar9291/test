import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HandDetailsLargeComponent } from './hand-details-large.component';
import { HandDetails } from '@models/handMRT/ui/hand/localizers/hand-details.model';
import { TranslateModule } from '@ngx-translate/core';

describe('HandDetailsLargeComponent [localizer]', () => {
  let component: HandDetailsLargeComponent;
  let fixture: ComponentFixture<HandDetailsLargeComponent>;
  let handLocalizations: HandDetails;
  let svgDebug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HandDetailsLargeComponent],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandDetailsLargeComponent);
    component = fixture.componentInstance;
    handLocalizations = new HandDetails();
    svgDebug = fixture.debugElement;
  });

  afterEach(() => {
    document.body.removeChild(svgDebug.nativeElement);
  });

  it('should create localizer component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(handLocalizations);
  });

  it('should select element when clicked on bone image', () => {
    spyOn(component, 'selectElement').and.callThrough();

    const d4ProximalPhalanx = svgDebug.query(By.css('#d4ProximalPhalanx'));
    const d4ProximalPhalanxText = svgDebug.query(By.css('#d4ProximalPhalanxText'));

    d4ProximalPhalanx.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.selectElement).toHaveBeenCalled();

      expect(d4ProximalPhalanx.nativeElement.classList.contains('localizer__bone--selected')).toBe(true);

      expect(d4ProximalPhalanxText.nativeElement.classList.contains('localizer__list-element--selected')).toBe(true);
    });
  });

  it('should select element when clicked on text label', () => {
    spyOn(component, 'selectElement').and.callThrough();
    fixture.detectChanges();
    const d3DistalPhalanx = svgDebug.query(By.css('#d3DistalPhalanx'));
    const d3DistalPhalanxText = svgDebug.query(By.css('#d3DistalPhalanxText'));
    d3DistalPhalanxText.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.selectElement).toHaveBeenCalled();

      expect(d3DistalPhalanx.nativeElement.classList.contains('localizer__bone--selected')).toBe(true);

      expect(d3DistalPhalanxText.nativeElement.classList.contains('localizer__list-element--selected')).toBe(true);
    });
  });
});
