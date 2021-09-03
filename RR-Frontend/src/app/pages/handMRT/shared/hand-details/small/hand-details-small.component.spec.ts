import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { HandDetails } from '@models/handMRT/ui/hand/localizers/hand-details.model';
import { TranslateModule } from '@ngx-translate/core';
import { HandDetailsSmallComponent } from './hand-details-small.component';

describe('HandDetailsSmallComponent [localizer]', () => {
  let component: HandDetailsSmallComponent;
  let fixture: ComponentFixture<HandDetailsSmallComponent>;
  let handLocalizations: HandDetails;
  let svgDebug: DebugElement;
  const locationTypeEnum = LocationTypeEnum;

  let osTriquetrum;
  let d4MetacarpalBone;
  let radius;
  let ulna;
  let d1DistalPhalanx;
  let d3MiddlePhalanx;
  let handSide;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HandDetailsSmallComponent],
      imports: [TranslateModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HandDetailsSmallComponent);
    component = fixture.componentInstance;
    handLocalizations = new HandDetails();
    svgDebug = fixture.debugElement;
  }));

  it('should create localizer component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(handLocalizations);
  });

  it('should render right hand', () => {
    component.side = locationTypeEnum.Right;
    fixture.detectChanges();
    handSide = svgDebug.query(By.css('#handSide'));
    expect(handSide.nativeElement.innerHTML).toEqual('hand-details.right');
  });

  it('hand bones should not be selected', () => {
    osTriquetrum = svgDebug.query(By.css('#osTriquetrum'));
    d4MetacarpalBone = svgDebug.query(By.css('#osPisiforme'));
    radius = svgDebug.query(By.css('#radius'));

    expect(osTriquetrum.nativeElement.classList.contains('hand-bone--selected')).toBe(false);
    expect(d4MetacarpalBone.nativeElement.classList.contains('hand-bone--selected')).toBe(false);
    expect(radius.nativeElement.classList.contains('hand-bone--selected')).toBe(false);
  });

  it('hand bones should be selected', () => {
    component.ngValue.ulna = true;
    component.ngValue.d1DistalPhalanx = true;
    component.ngValue.d3MiddlePhalanx = true;

    fixture.detectChanges();

    ulna = svgDebug.query(By.css('#ulna'));
    d1DistalPhalanx = svgDebug.query(By.css('#d1DistalPhalanx'));
    d3MiddlePhalanx = svgDebug.query(By.css('#d3MiddlePhalanx'));

    expect(ulna.nativeElement.classList.contains('hand-bone--selected')).toBe(true);
    expect(d1DistalPhalanx.nativeElement.classList.contains('hand-bone--selected')).toBe(true);
    expect(d3MiddlePhalanx.nativeElement.classList.contains('hand-bone--selected')).toBe(true);
  });
});
