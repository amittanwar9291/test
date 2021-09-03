import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ShoulderSimple } from '@models/shoulderMRT/ui/shoulder/shoulder-simple.model';

import { ShoulderSimpleComponent } from './shoulder-simple.component';

describe('ShoulderSimpleComponent [localizer]', () => {
  let component: ShoulderSimpleComponent;
  let fixture: ComponentFixture<ShoulderSimpleComponent>;
  let shoulderLocalizations: ShoulderSimple;
  let svgDebug: DebugElement;
  let leftShoulder: DebugElement;
  let rightShoulder: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoulderSimpleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoulderSimpleComponent);
    component = fixture.componentInstance;
    shoulderLocalizations = new ShoulderSimple();
    svgDebug = fixture.debugElement;
    leftShoulder = svgDebug.query(By.css('#leftShoulder'));
    rightShoulder = svgDebug.query(By.css('#rightShoulder'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(shoulderLocalizations);
  });

  it('should select correct shoulder', () => {
    component.selectElement('left');
    expect(component.ngValue.left).toBe(true);

    component.selectElement('right');
    expect(component.ngValue.right).toBe(true);
  });

  it('singleChoiceMode - should automatically unclick opposite shoulder after click', () => {
    spyOn(component, 'selectElement').and.callThrough();

    component.isSingleChoice = true;
    const leftShoulderCircle = leftShoulder.query(By.css('.shoulder__circle--inner'));
    const rightShoulderCircle = rightShoulder.query(By.css('.shoulder__circle--inner'));
    leftShoulderCircle.triggerEventHandler('click', null);
    rightShoulderCircle.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.selectElement).toHaveBeenCalled();
      expect(leftShoulderCircle.nativeElement.classList.contains('shoulder__part--checked')).toBe(false);
      expect(rightShoulderCircle.nativeElement.classList.contains('shoulder__part--checked')).toBe(true);
    });
  });

  it('should hover circle on hover text', () => {
    spyOn(component, 'hoverElement').and.callThrough();

    const leftShoulderCircle = leftShoulder.query(By.css('.shoulder__circle--inner'));
    const leftShoulderText = leftShoulder.query(By.css('.shoulder__name'));
    leftShoulderText.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.hoverElement).toHaveBeenCalled();

      expect(leftShoulderCircle.nativeElement.classList.contains('shoulder__part--hover')).toBe(true);
    });
  });
});
