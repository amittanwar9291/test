import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { mapKeys } from 'lodash';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';
import { FootBigModel } from '@models/feetMRT/ui/localizers/foot-big.model';

@Component({
  selector: 'rr-foot-big-bones-complex',
  templateUrl: './foot-big-bones-complex.component.html',
  styleUrls: ['./foot-big-bones-complex.component.scss'],
  providers: [MakeProvider(FootBigBonesComplexComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FootBigBonesComplexComponent extends LocalizerBase<FootBigModel> implements OnInit {
  @Output() close = new EventEmitter();
  @Output() selectedElement = new EventEmitter();

  @Input() side: 'right' | 'left';
  @Input() selectionMode: 'single' | 'multi';
  @Input() dictionaryType: 'L005' | 'L006';
  @Input() isComplex: boolean;
  @Input() isMalleoli: boolean;
  @Input() headerKeys: string[];

  dictionaries = {
    L005: [
      'tibia',
      'fibula',
      'talus',
      'calcaneus',
      'osNaviculare',
      'osCuneiformeMediale',
      'osCuneiformeIntermedium',
      'osCuneiformeLaterale',
      'osCuboideum',
      'osMetatarsale1',
      'osMetatarsale2',
      'osMetatarsale3',
      'osMetatarsale4',
      'osMetatarsale5',
      'proximalPhalanxD1',
      'proximalPhalanxD2',
      'proximalPhalanxD3',
      'proximalPhalanxD4',
      'proximalPhalanxD5',
      'middlePhalanxD2',
      'middlePhalanxD3',
      'middlePhalanxD4',
      'middlePhalanxD5',
      'distalPhalanxD1',
      'distalPhalanxD2',
      'distalPhalanxD3',
      'distalPhalanxD4',
      'distalPhalanxD5',
      'malleoli',
      'complexOrMultipleBones'
    ],
    L006: [
      'tibia',
      'fibula',
      'posteromedialTalus',
      'anterolateralTalus',
      'calcaneus',
      'osCuboideum',
      'osNaviculare',
      'osMetatarsale1',
      'osMetatarsale2',
      'osMetatarsale3',
      'osMetatarsale4',
      'osMetatarsale5Proximal',
      'osMetatarsale5Distal',
      'proximalPhalanxD1',
      'proximalPhalanxD2',
      'proximalPhalanxD3',
      'proximalPhalanxD4',
      'proximalPhalanxD5',
      'middlePhalanxD2',
      'middlePhalanxD3',
      'middlePhalanxD4',
      'middlePhalanxD5'
    ]
  };

  constructor(public translate: TranslateService) {
    super(FootBigModel);
    this.side = this.side ? this.side : 'right';
    this.selectionMode = this.selectionMode ? this.selectionMode : 'single';
    this.dictionaryType = this.dictionaryType ? this.dictionaryType : 'L005';
    this.isComplex = this.isComplex ? this.isComplex : true;
    this.isMalleoli = this.isMalleoli ? this.isMalleoli : true;
  }

  ngOnInit(): void {
    this.headerKeys = this.headerKeys ? this.headerKeys : ['footBigLocalizer.title'];
  }

  complexMalleoliSpaceAdd(space: number): number {
    return this.isMalleoli && this.isComplex ? space + 30 : space;
  }

  complexMalleoliSpaceReduce(space: number): number {
    return this.isMalleoli && this.isComplex ? space - 30 : space;
  }

  closeLargeLocalizer() {
    this.close.emit();
  }

  shouldByDisplay(name: string): boolean {
    return this.dictionaries[this.dictionaryType].includes(name);
  }

  getElementClass(name: string): string {
    if (this.ngValue[name]) {
      return 'selected';
    } else if (this.isElementHovered(name)) {
      return 'hovered';
    } else {
      return '';
    }
  }

  getTextClass(elementName: string): string {
    if (this.ngValue[elementName]) {
      return 'text-selected';
    } else if (this.isElementHovered(elementName)) {
      return 'text-hovered';
    } else {
      return '';
    }
  }

  getCircleClass(name: string): string {
    if (this.ngValue[name]) {
      return 'circle-selected';
    } else if (this.isElementHovered(name)) {
      return 'circle-hovered';
    } else {
      return '';
    }
  }

  selectNewElement(element: string): void {
    if (this.selectionMode === 'single') {
      let selected = '';
      mapKeys(this.ngValue, (value, key) => {
        if (value) {
          selected = key;
        }
      });
      if (selected) {
        if (selected === element) {
          this.selectElement(element);
        } else {
          this.selectElement(selected);
          this.selectElement(element);
        }
      } else {
        this.selectElement(element);
      }
    } else {
      this.selectElement(element);
    }
    this.selectedElement.emit();
  }
}
