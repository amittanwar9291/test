import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { KneeSimple } from '@models/kneeMRT/ui/knee/knee-simple.model';

import { KneeSimpleComponent } from './knee-simple.component';

describe('KneeSimpleComponent [localizer]', () => {
  let component: KneeSimpleComponent;
  let fixture: ComponentFixture<KneeSimpleComponent>;
  let kneeLocalizations: KneeSimple;
  let svgDebug: DebugElement;
  let leftKnee: DebugElement;
  let rightKnee: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KneeSimpleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeSimpleComponent);
    component = fixture.componentInstance;
    kneeLocalizations = new KneeSimple();
    svgDebug = fixture.debugElement;
    leftKnee = svgDebug.query(By.css('#leftKnee'));
    rightKnee = svgDebug.query(By.css('#rightKnee'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(kneeLocalizations);
  });

  it('should select correct shoulder', () => {
    component.selectElement('left');
    expect(component.ngValue.left).toBe(true);

    component.selectElement('right');
    expect(component.ngValue.right).toBe(true);
  });

  it('singleChoiceMode - should automatically unclick opposite knee after select one', () => {
    spyOn(component, 'selectElement').and.callThrough();

    component.isSingleChoice = true;
    const leftKneeCircle = leftKnee.query(By.css('.knee__circle--inner'));
    const rightKneeCircle = rightKnee.query(By.css('.knee__circle--inner'));
    rightKneeCircle.triggerEventHandler('click', null);
    leftKneeCircle.triggerEventHandler('click', null);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.selectElement).toHaveBeenCalled();
      expect(leftKneeCircle.nativeElement.classList.contains('knee__part--checked')).toBe(true);
      expect(rightKneeCircle.nativeElement.classList.contains('knee__part--checked')).toBe(false);
    });
  });
});
