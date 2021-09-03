import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TranslateModule } from '@ngx-translate/core';

import { SpineComplexComponent } from './spine-complex.component';

import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

describe('SpineComplexComponent [localizer]', () => {
  let component: SpineComplexComponent;
  let fixture: ComponentFixture<SpineComplexComponent>;
  let spineLocations: SpineLocation;
  let svgDebug: DebugElement;
  let spineVertebrates: DebugElement[];
  let spineDiscs: DebugElement[];

  const checkElements = (elementType: string, selectedIndexes?: number[] | boolean): void => {
    const checkFunction = (element: DebugElement, index: number): void => {
      expect(element.nativeElement.classList.contains('element__selected')).toBe(
        selectedIndexes
          ? typeof selectedIndexes === 'boolean'
            ? selectedIndexes
            : selectedIndexes.some((selectedIndex: number): boolean => selectedIndex === index)
          : false
      );
    };

    if (elementType === 'vertebrae') {
      spineVertebrates.forEach(checkFunction);
    } else {
      spineDiscs.forEach(checkFunction);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [SpineComplexComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpineComplexComponent);
    component = fixture.componentInstance;
    spineLocations = new SpineLocation();
    svgDebug = fixture.debugElement;
    spineVertebrates = svgDebug
      .queryAll(By.css('.spine-part'))
      .reduce((elements, part) => [...elements, ...part.childNodes], [])
      .filter(element => element.nativeNode.classList.contains('vertebrae'));
    spineDiscs = svgDebug
      .queryAll(By.css('.spine-part'))
      .reduce((elements, part) => [...elements, ...part.childNodes], [])
      .filter(element => element.nativeNode.classList.contains('disc'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize correctly', () => {
    expect(component.ngValue).toEqual(spineLocations);
  });

  it('has correct amount of vertebrates', () => {
    expect(spineVertebrates.length).toEqual(27);
  });

  it('has correct amount of discs', () => {
    expect(spineDiscs.length).toEqual(25);
  });

  describe('when selected logic is VertebraeEach', () => {
    beforeEach(() => {
      component.logicType = SpineLocationLogicTypeEnum.VertebreEach;
      fixture.detectChanges();

      spyOn(component, 'selectElement').and.callThrough();
    });

    afterEach(() => {
      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();
      });
    });

    it('shouldn\'t select vertebrates range', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('vertebrae', [0, spineVertebrates.length - 1]);
      });
    });

    it('shouldn\'t unselect other vertebrates', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('vertebrae', [0]);
      });
    });
  });

  describe('when selected logic is DiscEach', () => {
    beforeEach(() => {
      component.logicType = SpineLocationLogicTypeEnum.DiscEach;
      fixture.detectChanges();

      spyOn(component, 'selectElement').and.callThrough();
    });

    afterEach(() => {
      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();
      });
    });

    it('shouldn\'t select discs range and should two symmetric first discs', () => {
      spineDiscs[0].triggerEventHandler('click', {});
      spineDiscs[spineDiscs.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc', [0, 1, spineDiscs.length - 1]);
      });
    });

    it('shouldn\'t unselect other discs', () => {
      spineDiscs[0].triggerEventHandler('click', {});
      spineDiscs[spineDiscs.length - 1].triggerEventHandler('click', {});
      spineDiscs[spineDiscs.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc', [0, 1]);
      });
    });
  });

  describe('when selected logic is VertebreRange', () => {
    beforeEach(() => {
      component.logicType = SpineLocationLogicTypeEnum.VertebreRange;
      fixture.detectChanges();

      spyOn(component, 'selectElement').and.callThrough();
    });

    afterEach(() => {
      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();
      });
    });

    it('should select vertebrates range', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('vertebrae', true);
      });
    });

    it('shouldn\'t select discs', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc');
      });
    });

    it('should unselect vertebrates range', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('vertebrae');
      });
    });
  });

  describe('when selected logic is VertebreAndDiscRange', () => {
    beforeEach(() => {
      component.logicType = SpineLocationLogicTypeEnum.VertebreAndDiscRange;
      fixture.detectChanges();

      spyOn(component, 'selectElement').and.callThrough();
    });

    afterEach(() => {
      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();
      });
    });

    it('should select vertebrates and discs range', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('vertebrae', true);
        checkElements('disc', true);
      });
    });

    it('should unselect all selected vertebrates and discs', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      spineVertebrates[0].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('vertebrae');
        checkElements('disc');
      });
    });
  });

  describe('when selected logic is OneVertebre', () => {
    beforeEach(() => {
      component.logicType = SpineLocationLogicTypeEnum.OneVertebre;
      fixture.detectChanges();

      spyOn(component, 'selectElement').and.callThrough();
    });

    afterEach(() => {
      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();
      });
    });

    it('should\'t select any disc', () => {
      spineDiscs[0].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc');
      });
    });

    it('should select only one vertebrae', () => {
      spineVertebrates[0].triggerEventHandler('click', {});
      spineVertebrates[spineVertebrates.length - 1].triggerEventHandler('click', {});
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc', [spineVertebrates.length - 1]);
      });
    });
  });

  describe('when selected logic is DiscEachIntervertebre', () => {
    beforeEach(() => {
      component.logicType = SpineLocationLogicTypeEnum.DiscEachIntervertebre;
      fixture.detectChanges();

      spyOn(component, 'selectElement').and.callThrough();
    });

    afterEach(() => {
      fixture.whenStable().then(() => {
        expect(component.selectElement).toHaveBeenCalled();
      });
    });

    it('should select closest vertebrates', fakeAsync(() => {
      spineDiscs[0].triggerEventHandler('click', {});
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc', [0, 1]);
        checkElements('vertebrae', [1, 2]);
      });
    }));

    it('should\'t vertebrae unselect selected area', fakeAsync(() => {
      spineDiscs[0].triggerEventHandler('click', {});
      spineVertebrates[1].triggerEventHandler('click', {});
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc', [0, 1]);
        checkElements('vertebrae', [1, 2]);
      });
    }));

    it('should disc unselect selected area', fakeAsync(() => {
      spineDiscs[0].triggerEventHandler('click', {});
      spineDiscs[1].triggerEventHandler('click', {});
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc');
        checkElements('vertebrae');
      });
    }));

    it('should\'t closes disc unselect common vertebrae', fakeAsync(() => {
      spineDiscs[0].triggerEventHandler('click', {});
      spineDiscs[2].triggerEventHandler('click', {});
      tick();
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        checkElements('disc', [0, 1, 2]);
        checkElements('vertebrae', [1, 2, 3]);
      });
    }));
  });
});
