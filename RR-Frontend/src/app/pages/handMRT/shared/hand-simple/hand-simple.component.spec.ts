import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HandSimpleComponent } from './hand-simple.component';
import { HandSimple } from '@models/handMRT/ui/hand/localizers/hand-simple.model';

describe('HandSimpleComponent [localizer]', () => {
  let component: HandSimpleComponent;
  let fixture: ComponentFixture<HandSimpleComponent>;
  let handLocalizations: HandSimple;
  let svgDebug: DebugElement;
  let leftHand: DebugElement;
  let rightHand: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HandSimpleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandSimpleComponent);
    component = fixture.componentInstance;
    handLocalizations = new HandSimple();
    svgDebug = fixture.debugElement;
    leftHand = svgDebug.query(By.css('#leftHand'));
    rightHand = svgDebug.query(By.css('#rightHand'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(handLocalizations);
  });

  it('should select correct shoulder', () => {
    component.selectElement('left');
    expect(component.ngValue.left).toBe(true);

    component.selectElement('right');
    expect(component.ngValue.right).toBe(true);
  });
});
