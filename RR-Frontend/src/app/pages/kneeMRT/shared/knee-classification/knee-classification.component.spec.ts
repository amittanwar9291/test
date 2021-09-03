import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { KneeClassification } from '@models/kneeMRT/ui/knee/knee-classification.model';

import { KneeClassificationComponent } from './knee-classification.component';
import { TranslateModule } from '@ngx-translate/core';

describe('KneeClassificationComponent [localizer]', () => {
  let component: KneeClassificationComponent;
  let fixture: ComponentFixture<KneeClassificationComponent>;
  let classificationLocations: KneeClassification;
  let svgDebug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [KneeClassificationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KneeClassificationComponent);
    component = fixture.componentInstance;
    classificationLocations = new KneeClassification();
    svgDebug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(classificationLocations);
  });

  it('should select and unselect correct classification', () => {
    component.selectElement('normal');
    expect(component.ngValue.normal).toBe(true);

    component.selectElement('normal');
    expect(component.ngValue.normal).toBe(false);
  });

  it('should check element on element\'s text click', () => {
    const classElements: DebugElement[] = svgDebug.queryAll(By.css('.classification-elem'));

    spyOn(component, 'selectElement').and.callThrough();

    classElements.forEach(element => {
      element.children.find(elementPart => elementPart.name === 'text').triggerEventHandler('click', null);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        element.children.forEach(elementPart => {
          if (elementPart.nativeElement.classList.contains('classification-path')) {
            expect(elementPart.nativeElement.classList.contains('part-checked')).toBe(true);
          }
        });
      });
    });
  });
});
