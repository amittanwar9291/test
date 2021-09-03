import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';

import { BreastFullCrossShoulderComponent } from './breast-full-cross-shoulder.component';

import { BreastFullCrossShoulder } from '@models/shared/mamma/breast/breast-full-cross-shoulder';

describe('BreastFullCrossShoulderComponent [localizer]', () => {
  let component: BreastFullCrossShoulderComponent;
  let fixture: ComponentFixture<BreastFullCrossShoulderComponent>;
  let breastFullCrossShoulderLocations: BreastFullCrossShoulder;
  let svgDebug: DebugElement;
  let rightBreast: DebugElement;
  let leftBreast: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [BreastFullCrossShoulderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreastFullCrossShoulderComponent);
    component = fixture.componentInstance;
    breastFullCrossShoulderLocations = new BreastFullCrossShoulder();
    svgDebug = fixture.debugElement;
    rightBreast = svgDebug.query(By.css('#rightBreast'));
    leftBreast = svgDebug.query(By.css('#leftBreast'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(breastFullCrossShoulderLocations);
  });

  it('should have correct element amount per breast', () => {
    const rightBreastParts = rightBreast.childNodes.filter(breastElem => breastElem.nativeNode.classList.contains('breast-part'));
    const leftBreastParts = leftBreast.childNodes.filter(breastElem => breastElem.nativeNode.classList.contains('breast-part'));

    expect(rightBreastParts.length).toEqual(11);

    expect(rightBreastParts.length).toEqual(leftBreastParts.length);
  });

  describe('when breast\'s element has been clicked', () => {
    it('should check element', () => {
      // @ts-ignore
      const leftBreastPart: DebugElement = leftBreast.childNodes.find(
        (breastElem: DebugElement) => breastElem.name === 'path' && breastElem.nativeNode.classList.contains('breast-part')
      );

      spyOn(component, 'selectElement').and.callThrough();

      leftBreastPart.triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();

        expect(leftBreastPart.nativeNode.classList.contains('breast-part-checked')).toBe(true);
      });
    });

    it('should disable left breast if clicked element belongs to right breast', () => {
      // @ts-ignore
      const rightBreastPart: DebugElement = rightBreast.childNodes.find(
        (breastElem: DebugElement) => breastElem.name === 'path' && breastElem.nativeNode.classList.contains('breast-part')
      );

      spyOn(component, 'selectElement').and.callThrough();

      rightBreastPart.triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();

        expect(leftBreast.nativeElement.classList.contains('breast-disabled')).toBe(true);
      });
    });

    it('should disable right breast if clicked element belongs to left breast', () => {
      // @ts-ignore
      const leftBreastPart: DebugElement = leftBreast.childNodes.find(
        (breastElem: DebugElement) => breastElem.name === 'path' && breastElem.nativeNode.classList.contains('breast-part')
      );

      spyOn(component, 'selectElement').and.callThrough();

      leftBreastPart.triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();

        expect(rightBreast.nativeElement.classList.contains('breast-disabled')).toBe(true);
      });
    });
  });
});
