import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, DebugNode } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AxialLocalizerComponent } from './axial-localizer.component';
import { AxialLocation } from '@models/shared/spine/localizers/axial-location.model';
import { TranslateModule } from '@ngx-translate/core';

describe('AxialLocalizerComponent [localizer]', () => {
  let component: AxialLocalizerComponent;
  let fixture: ComponentFixture<AxialLocalizerComponent>;
  let axialLocation: AxialLocation;
  let svgDebug: DebugElement;
  let prevertebral: DebugElement;
  let paravertebalRight: DebugElement;
  let paravertebalLeft: DebugElement;
  let dorsalRight: DebugElement;
  let dorsalLeft: DebugElement;
  let subcutan: DebugElement;
  let localizerGroup: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [AxialLocalizerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxialLocalizerComponent);
    component = fixture.componentInstance;
    axialLocation = new AxialLocation();
    svgDebug = fixture.debugElement;

    prevertebral = svgDebug.query(By.css('#prevertebral'));
    paravertebalRight = svgDebug.query(By.css('#paravertebal-right'));
    paravertebalLeft = svgDebug.query(By.css('#paravertebal-left'));
    dorsalRight = svgDebug.query(By.css('#dorsal-right'));
    dorsalLeft = svgDebug.query(By.css('#dorsal-left'));
    subcutan = svgDebug.query(By.css('#subcutan'));
    localizerGroup = svgDebug.query(By.css('#axialLocalizerGroup'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component).toBeDefined();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(axialLocation);
  });

  it('should have correct element amount per element', () => {
    const prevertebralParts = prevertebral.childNodes;
    const paravertebalRightParts = paravertebalRight.childNodes;
    const paravertebalLeftParts = paravertebalLeft.childNodes;
    const dorsalRightParts = dorsalRight.childNodes;
    const dorsalLeftParts = dorsalLeft.childNodes;
    const subcutanParts = subcutan.childNodes;

    expect(prevertebralParts.length).toEqual(2);
    expect(paravertebalRightParts.length).toEqual(2);
    expect(paravertebalLeftParts.length).toEqual(2);
    expect(dorsalRightParts.length).toEqual(2);
    expect(dorsalLeftParts.length).toEqual(2);
    expect(subcutanParts.length).toEqual(1);
  });

  it('should have correct amount of bone parts', () => {
    const localizerGroupParts: DebugNode[] = localizerGroup.childNodes.filter(
      (breastElem: DebugElement) => breastElem.name === 'g' && breastElem.nativeNode.classList.contains('sector-group')
    );
    expect(localizerGroupParts.length).toEqual(6);
  });

  describe('when bone\'s element has been clicked', () => {
    it('should check element', () => {
      spyOn(component, 'selectElement').and.callThrough();

      prevertebral.triggerEventHandler('click', {});

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();

        expect(prevertebral.nativeNode.classList.contains('clicked')).toBe(true);
      });
    });

    it('should deselect element when was clicked second time', () => {
      spyOn(component, 'selectElement').and.callThrough();

      prevertebral.triggerEventHandler('click', {});

      fixture.detectChanges();

      prevertebral.triggerEventHandler('click', {});

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();

        expect(prevertebral.nativeNode.classList.contains('clicked')).toBe(false);
      });
    });

    it('should set property to true after click', () => {
      spyOn(component, 'selectElement').and.callThrough();

      prevertebral.triggerEventHandler('click', {});
      paravertebalRight.triggerEventHandler('click', {});
      paravertebalLeft.triggerEventHandler('click', {});
      dorsalRight.triggerEventHandler('click', {});
      dorsalLeft.triggerEventHandler('click', {});
      subcutan.triggerEventHandler('click', {});

      fixture.detectChanges();

      const propsAxialLocation = Object.keys(new AxialLocation());

      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();

        propsAxialLocation.forEach(prop => {
          expect(component.ngValue[prop]).toBe(true);
        });
      });
    });
  });
});
