import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';

import { chain, compact, forEach, lowerFirst, pickBy, upperFirst, findKey, clone } from 'lodash';

import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';

import { SlideSearchResults } from '@models/shared/search-engine/slide-search-results.model';
import { StandardOrDropdownTranslationItem } from '@models/shared/search-engine/translation-items-models/standard-or-dropdown-translation-item.type';
import { StandardOrDropdownMatchingControl } from '@models/shared/search-engine/matching-control-models/standard-or-dropdown-mactching-control.type';
import { StandardTranslationItem } from '@models/shared/search-engine/translation-items-models/standard-translation-item.model';
import { DropdownTranslationItem } from '@models/shared/search-engine/translation-items-models/dropdown-translation-item.model';
import { GroupedDropdownTranslationItem } from '@models/shared/search-engine/translation-items-models/grouped-dropdown-translation-item.model';
import { StandardMatchingControl } from '@models/shared/search-engine/matching-control-models/standard-matching-control.model';
import { DropdownMatchingControl } from '@models/shared/search-engine/matching-control-models/dropdown-matching-control.model';
import { MatchingControl } from '@models/shared/search-engine/matching-control-models/matching-control.model';

import { MRTModulesEnum } from '@enums/search-engine/mrt-modules.enum';
import { CTModulesEnum } from '@enums/search-engine/ct-modules.enum';
import { ModuleTypeEnum } from '@enums/search-engine/module-type.enum';
import { SubtabbedSearchItemsInterface } from '@models/shared/search-engine/interfaces/subtabbed-search-items.interface';
import { SearchMapFindingsObject, SearchMapModel } from '@models/shared/search-engine/search-map.model';

@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {
  moduleTranslationsMap;
  currentModuleName: string;
  currentModuleSlidesNamesTranslationsMap;
  moduleMetaDataMap;
  currentModuleSlidesOrderMap: {};

  constructor(
    private navigationReportDataService: NavigationReportDataService,
    private translateService: TranslateService,
    private http: HttpClient
  ) {}

  getCurrentModuleSlidesList(): void {
    const reportData = this.navigationReportDataService.getReportData();
    this.currentModuleName = lowerFirst(reportData.examinationType);

    const slidesOrder = {};
    reportData.pages.forEach(page => {
      slidesOrder[page.pageNumber] = page.typeName.split('_')[1];
    });
    this.currentModuleSlidesOrderMap = slidesOrder;
  }

  getFirstPageTranslationsMap(currentModuleFirstPageTranslationsMap: any, sharedFirstPageTranslationsMap: any): any {
    // console.log(currentModuleFirstPageTranslationsMap, sharedFirstPageTranslationsMap);
    Object.assign(currentModuleFirstPageTranslationsMap, sharedFirstPageTranslationsMap);
    return currentModuleFirstPageTranslationsMap;
  }

  /**
   * Here we filter only those translations that comply with the following rules:
   * 1. The translations item doesn't have the 'forModules' property which means it is used across all Technology pages;
   * 2. The translation item does have the 'forModules' property and it includes the current module name;
   */
  getTechnologyTranslationsMap(currentModuleTechnologyTranslationsMap: any, sharedTechnologyTranslationsMap: any): any {
    const filteredTechnologyTranslationsMap = pickBy(sharedTechnologyTranslationsMap, item => {
      const moduleTypes = Object.values(ModuleTypeEnum);

      if (item.hasOwnProperty('forModules')) {
        if (moduleTypes.includes(item.forModules[0].toLowerCase())) {
          return this.isCurrentModuleTheGivenModuleType(item.forModules[0]);
        }
        return item.forModules.includes(this.currentModuleName);
      } else {
        return item;
      }
    });
    Object.assign(currentModuleTechnologyTranslationsMap, filteredTechnologyTranslationsMap);
    return currentModuleTechnologyTranslationsMap;
  }

  private isCurrentModuleTheGivenModuleType(moduleType: ModuleTypeEnum): boolean {
    switch (moduleType.toLowerCase()) {
      case ModuleTypeEnum.mrt: {
        const mrtModules = Object.values(MRTModulesEnum);
        return mrtModules.includes(this.currentModuleName as MRTModulesEnum);
      }
      case ModuleTypeEnum.ct: {
        const ctModules = Object.values(CTModulesEnum);
        return ctModules.includes(this.currentModuleName as CTModulesEnum);
      }
    }
  }

  getCurrentModuleSlidesNamesTranslations(): void {
    this.translateService.stream(`routing.${upperFirst(this.currentModuleName)}`).subscribe(val => {
      this.currentModuleSlidesNamesTranslationsMap = val;
    });
  }

  getFindingsMap(): void {
    this.http.get(`assets/i18n/modules/${this.currentModuleName}/search-meta-data.json`).subscribe(val => {
      this.moduleMetaDataMap = val;
    });
  }

  prepareSlideNames(results: SlideSearchResults[]): SlideSearchResults[] {
    results.forEach(result => (result.slideNameTranslation = this.currentModuleSlidesNamesTranslationsMap[result.slideNumber]));
    return results;
  }

  prepareMatchingControlsObj(
    translateItems: StandardOrDropdownTranslationItem[],
    currentSlideName: string
  ): StandardOrDropdownMatchingControl[] {
    const controlsList = [];
    translateItems.forEach(item => {
      if (item.hasOwnProperty('value')) {
        item['rr-id'].forEach(rrId => {
          const standardMatchingControl = this.getStandardMatchingControl(rrId, item as StandardTranslationItem);
          controlsList.push(standardMatchingControl);
        });
      } else if (this.isDropdownTranslationItem(item)) {
        const dropdownMatchingControl = this.getDropdownMatchingControl(item as DropdownTranslationItem, currentSlideName);
        controlsList.push(dropdownMatchingControl);
      }
    });

    return controlsList;
  }

  // TODO improve this method to return value only when all internal Promises resolve;
  async addMetaDataToResults(results: SlideSearchResults[]): Promise<SlideSearchResults[]> {
    results.forEach(currentSlideResults => {
      const controlsWithMetaData = [];
      currentSlideResults.matchingControls.forEach(control => {
        const controls = this.getFindingsAndTabsDataForMatchingControl(control, currentSlideResults.slideName);
        controlsWithMetaData.push(...controls);
      });

      currentSlideResults.matchingControls = controlsWithMetaData;
    });

    return results;
  }

  getMatchingDropdownTranslationItems(
    queryString: string,
    translationEntry: { key: string; value: DropdownTranslationItem }
  ): DropdownTranslationItem[] {
    const matchingItems: DropdownTranslationItem[] = [];
    const dropdownTranslationEntry = translationEntry.value;

    /**
     * removing the 'delete' entry from a finding options dropdown so, that it's not showed in the results if user types e.g. "Eingabe"
     * (which would match the "Eingabe loschen" option)
     */
    dropdownTranslationEntry.options = pickBy(dropdownTranslationEntry.options, val => val.value !== 'delete');

    if (!dropdownTranslationEntry.hasOwnProperty('dropdownLabel-rr-id')) {
      console.warn('Translation entry: ', dropdownTranslationEntry, 'doesn\'t have the "dropdownLabel-rr-id" property');
    }

    dropdownTranslationEntry['dropdownLabel-rr-id'].forEach(rrId => {
      const currentDropdownUsage = { 'dropdownLabel-rr-id': [rrId], options: dropdownTranslationEntry.options };
      const matchingDropdownOptions = this.getMatchingDropdownOptions(queryString, currentDropdownUsage);

      if (matchingDropdownOptions.options.length) {
        matchingItems.push(matchingDropdownOptions);
      }
    });

    return matchingItems;
  }

  getStandardMatchingControl(rrId: string, item: StandardTranslationItem): StandardMatchingControl {
    return new StandardMatchingControl(rrId, item.value, this.getColumnNumberByRrId(rrId), item.area);
  }

  getDropdownMatchingControl(item: DropdownTranslationItem, currentSlideName: string): DropdownMatchingControl {
    const matchingControl = new DropdownMatchingControl(
      item['dropdownLabel-rr-id'][0],
      item.options,
      this.getColumnNumberByRrId((item as DropdownTranslationItem)['dropdownLabel-rr-id'][0]),
      this.getDropdownLabel(item as DropdownTranslationItem, currentSlideName)
    );

    return matchingControl;
  }

  sortResultsBySlidesOrder(results: SlideSearchResults[]): SlideSearchResults[] {
    const sortedResults = Object.keys(this.currentModuleSlidesOrderMap).map(key => {
      const result: SlideSearchResults = results.find(
        item => item.slideName.toLowerCase() === this.currentModuleSlidesOrderMap[key].toLowerCase()
      );
      if (result) {
        result.slideNumber = key;
      }
      return result;
    });

    return compact(sortedResults);
  }

  /**
   * Here we assume that we only want to have ordinary translation items and dropdown translation items searchable. For this purpose we must
   * filter out all translation items from the JSON files that are not ordinary translation items or dropdown translation items.
   *
   * By ordinary translation items we mean translations of headers, labels, captions etc that in the JSON file are presented like below:
   * "adenosineInfusion": {
   *     "rr-id": ["car_m_030502"],
   *     "value": "Adenosin-Infusion"
   *   },
   *
   * By dropdown translation items we mean translation sitems that contain dropdown options (standard and grouped dropdowns) like below:
   * "findingTypes": {
   *    "dropdownLabel-rr-id": ["car_m_090106"],
   *     "options": {
   *       "0": {
   *         "value": "Pericardium",
   *         "label": "Perikard"
   *       },
   *       "1": {
   *         "value": "MediastinalVessels",
   *         "label": "Mediastinale Gefäße"
   *       }
   *     }
   *   },
   */
  getSearchableTranslations(allTranslations) {
    const filteredAllTranslations = {};
    for (const slide of Object.keys(allTranslations)) {
      filteredAllTranslations[slide] = this.getFilteredTranslations(allTranslations, slide);
    }
    return filteredAllTranslations;
  }

  private getFilteredTranslations(translations, slide: string): any {
    const slideTranslations = translations[slide];

    return Object.keys(slideTranslations)
      .filter(item => {
        if (['findingTypes', 'findingTypes1', 'findingTypes2'].includes(item) && !slideTranslations[item].hasOwnProperty('options')) {
          console.warn(
            `"${item}" translations key in the "${slide}" slide has no "options" property although it is a finding dropdown options translation key`
          );
        }

        if (slideTranslations[item]['rr-id'] && !Array.isArray(slideTranslations[item]['rr-id'])) {
          console.warn(
            `rr-id "${slideTranslations[item]['rr-id']}" in the translations JSON of the "${slide}" slide is not enclosed in an Array`
          );
        }

        if (slideTranslations[item]['dropdownLabel-rr-id'] && !Array.isArray(slideTranslations[item]['dropdownLabel-rr-id'])) {
          console.warn(
            `dropdownLabel-rr-id "${slideTranslations[item]['dropdownLabel-rr-id']}" in the translations JSON of the "${slide}" slide is not enclosed in an Array`
          );
        }

        return this.isStandardTranslationItem(slideTranslations[item]) || this.isDropdownTranslationItem(slideTranslations[item]);
      })
      .reduce((obj, key) => {
        let translationItem = (obj[key] = slideTranslations[key]);
        if (this.isDropdownTranslationItem(translationItem) && this.isGroupedDropdownTranslation(translationItem)) {
          translationItem = this.flattenGroupedDropdownOptions(translationItem);
        }
        obj[key] = translationItem;
        return obj;
      }, {});
  }

  private getFindingsAndTabsDataForMatchingControl(control: MatchingControl, slideName: string): StandardOrDropdownMatchingControl[] {
    if (!this.moduleMetaDataMap) {
      throw new Error('No search-meta-data.json file provided for the current module');
    }
    const slideMetaDataMap: SearchMapModel = this.moduleMetaDataMap.map[slideName];
    const currentSlideTranslationsObj = this.moduleTranslationsMap[slideName];

    const controls = [];

    // SEARCHING IN TABS that are outside findings:
    forEach(slideMetaDataMap?.outOfFindingsTabs, (tabRrIdsList: string[] | SubtabbedSearchItemsInterface, currentTabRrId: string) => {
      const currentControl = Object.assign({}, control);
      const tabNameTranslation = chain(currentSlideTranslationsObj)
        .pickBy(item => item.hasOwnProperty('rr-id'))
        .find(translation => translation['rr-id'].some(rrId => rrId === currentTabRrId))
        .value()?.value;

      if (Array.isArray(tabRrIdsList)) {
        if (tabRrIdsList.find(item => item === currentControl['rr-id'])) {
          controls.push(Object.assign(currentControl, { tab: tabNameTranslation }));
        }

        // situation relevant for those pages where we have nested tabs (all CT modules 3rd pages and AbdomenMRT 3rd page)
      } else {
        if (tabRrIdsList.mainTabItems.find(item => item === currentControl['rr-id'])) {
          controls.push(Object.assign(currentControl, { tab: tabNameTranslation }));
        }

        const subTabRrIdForCurrentControl = findKey(tabRrIdsList.subtabs, (rrIdsList: string[]) => {
          return rrIdsList.includes(currentControl['rr-id']);
        });

        if (subTabRrIdForCurrentControl) {
          const subTabNameTranslation = chain(currentSlideTranslationsObj)
            .pickBy(item => item.hasOwnProperty('rr-id'))
            .find(translation => translation['rr-id'].some(rrId => rrId === subTabRrIdForCurrentControl))
            .value()?.value;

          controls.push(Object.assign(currentControl, { tab: tabNameTranslation, subTab: subTabNameTranslation }));
        }
      }
    });

    // SEARCHING IN FINDINGS (and in tabs within a finding - if there are tabs):
    const possibleFindingOptionsKeys = ['findingTypes', 'findingTypes1', 'findingTypes2'];
    possibleFindingOptionsKeys.forEach(key => {
      if (!currentSlideTranslationsObj[key]) {
        return;
      }

      forEach(slideMetaDataMap[key], (value: SearchMapFindingsObject, findingName: string) => {
        const currentControl: MatchingControl = Object.assign({}, control);
        const findingNameTranslation = chain(currentSlideTranslationsObj[key].options)
          .pickBy(item => item.value !== 'delete')
          .find(item => item.value === findingName)
          .value()?.label;

        // searching in a finding (out of tabs)
        if (value.outOfTabs) {
          if (Array.isArray(value.outOfTabs)) {
            // Case 1: there is just one level of findings
            if (value.outOfTabs.find(item => item === currentControl['rr-id'])) {
              Object.assign(currentControl, { finding: findingNameTranslation });
              controls.push(currentControl);
            }
          } else {
            // Case 2: there are nested findings
            if (value.outOfTabs.mainFindingItems.find(item => item === currentControl['rr-id'])) {
              Object.assign(currentControl, { finding: findingNameTranslation });
              controls.push(currentControl);
            }
            if (value.outOfTabs.subfindings) {
              const subfindingsObj = value.outOfTabs.subfindings;
              forEach(subfindingsObj, (rrIds: string[], subFindingName: string) => {
                const subFindingsNameTranslation = chain(currentSlideTranslationsObj[`${key}Nested`].options)
                  .pickBy(item => item.value !== 'delete')
                  .find(item => item.value === subFindingName)
                  .value()?.label;

                if (rrIds.find(item => item === currentControl['rr-id'])) {
                  Object.assign(currentControl, { finding: findingNameTranslation, subFinding: subFindingsNameTranslation });
                  controls.push(currentControl);
                }
              });
            }
          }
        }

        // searching in a finding (in tabs)
        forEach(value.tabs, (currentTabControls, currentTabRrId) => {
          if (currentTabControls.find(item => item === currentControl['rr-id'])) {
            const currentControlClone = clone(currentControl);
            const tabNameTranslation = chain(currentSlideTranslationsObj)
              .pickBy(item => item.hasOwnProperty('rr-id'))
              .find(translation => translation['rr-id'].some(rrId => rrId === currentTabRrId))
              .value()?.value;

            Object.assign(currentControlClone, { finding: findingNameTranslation, tab: tabNameTranslation });
            controls.push(currentControlClone);
          }
        });
      });
    });

    if (!controls.length) {
      // TODO check if can find a result outside findings when first finds a result in the findings
      controls.push(control);
    }
    return controls;
  }

  private getDropdownLabel(dropdown: DropdownTranslationItem, currentSlideName: string): string {
    const rrId = dropdown['dropdownLabel-rr-id'][0];
    const currentSlideTranslations = this.moduleTranslationsMap[currentSlideName];

    const label = chain(currentSlideTranslations)
      .filter(value => value.hasOwnProperty('rr-id'))
      .find(value => value['rr-id'].some(item => item === rrId)) // find label translation only among those translations with 'rr-id' - not 'dropdownLabel-rr-id'
      .value();

    return label ? `${label.value}` : 'dropdown with no label';
  }

  isStandardTranslationItem(translationItem: StandardOrDropdownTranslationItem): boolean {
    return translationItem.hasOwnProperty('rr-id');
  }

  isDropdownTranslationItem(translationItem: StandardOrDropdownTranslationItem): boolean {
    return translationItem.hasOwnProperty('options');
  }

  isGroupedDropdownTranslation(translationItem: DropdownTranslationItem): boolean {
    return translationItem.options[0].hasOwnProperty('items');
  }

  isUnwantedTranslationItem(translationItem: StandardOrDropdownTranslationItem): boolean {
    return translationItem.hasOwnProperty('searchExcluded') && translationItem.searchExcluded;
  }

  flattenGroupedDropdownOptions(groupedDropdownTranslationItem: GroupedDropdownTranslationItem): DropdownTranslationItem {
    const flattenedOptions = [];
    groupedDropdownTranslationItem.options.forEach(option => {
      flattenedOptions.push(...option.items);
    });

    return {
      'dropdownLabel-rr-id': groupedDropdownTranslationItem['dropdownLabel-rr-id'],
      options: flattenedOptions
    };
  }

  isQueryMatch(queryString: string, value: string): boolean {
    return value.toLowerCase().includes(queryString.toLowerCase());
  }

  private getColumnNumberByRrId(rrId: string): number {
    return Number(rrId.split('_')[2].charAt(3));
  }

  private getMatchingDropdownOptions(queryString: string, dropdown): DropdownTranslationItem {
    const matchingOptions = chain(dropdown.options)
      .filter(value => this.isQueryMatch(queryString, value.label))
      .value();

    return {
      'dropdownLabel-rr-id': dropdown['dropdownLabel-rr-id'],
      options: matchingOptions
    };
  }
}
