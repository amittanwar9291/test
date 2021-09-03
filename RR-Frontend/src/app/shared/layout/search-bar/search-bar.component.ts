import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { Subject, zip } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';

import { cloneDeep, forEach, lowerFirst, trimStart } from 'lodash';

import { SlideSearchResults } from '@models/shared/search-engine/slide-search-results.model';
import { StandardOrDropdownTranslationItem } from '@models/shared/search-engine/translation-items-models/standard-or-dropdown-translation-item.type';
import { SearchEngineService } from '@layout/search-bar/search-engine.service';

@Component({
  selector: 'rr-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchQuery = '';
  searchResults: SlideSearchResults[] = [];

  @ViewChild('input') input;

  @Output() closeClicked = new EventEmitter();
  @Output() resized = new EventEmitter<number>();

  private destroy$ = new Subject();

  private searchDebouncer$: Subject<string> = new Subject();

  constructor(private translateService: TranslateService, private http: HttpClient, private searchEngine: SearchEngineService) {}

  ngOnInit(): void {
    this.initSearchDebounce();
    this.searchEngine.getCurrentModuleSlidesList();
    this.getTranslationsMap();
    this.searchEngine.getCurrentModuleSlidesNamesTranslations();
    this.searchEngine.getFindingsMap();

    this.translateService.onLangChange.subscribe(() => {
      this.resetSearchQuery();
    });
  }

  private getTranslationsMap(): void {
    const moduleSpecificTranslations$ = this.translateService.stream(this.searchEngine.currentModuleName);
    const sharedTranslations$ = this.translateService.stream('shared-templates');

    zip(moduleSpecificTranslations$, sharedTranslations$)
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => {
        const [currentModuleTranslationsMap, sharedTranslationsMap] = [...cloneDeep(val)];

        const currentModuleFirstSlideName = lowerFirst(this.searchEngine.currentModuleSlidesOrderMap[1]);
        currentModuleTranslationsMap[currentModuleFirstSlideName] = this.searchEngine.getFirstPageTranslationsMap(
          currentModuleTranslationsMap[currentModuleFirstSlideName],
          sharedTranslationsMap['patient-data']
        );

        currentModuleTranslationsMap.technology = this.searchEngine.getTechnologyTranslationsMap(
          currentModuleTranslationsMap.technology,
          sharedTranslationsMap.technology
        );

        // TODO Temporary filter for development purposes that makes the search only in a single given slide (not in all module slides)
        // const allowedSlideNames = ['localization'];
        // Object.keys(currentModuleTranslationsMap).forEach(key => {
        //   if (!allowedSlideNames.includes(key)) {
        //     delete currentModuleTranslationsMap[key];
        //   }
        // });
        // ****************************************************************************************************************

        const searchableTranslations = this.searchEngine.getSearchableTranslations(currentModuleTranslationsMap);
        this.searchEngine.moduleTranslationsMap = searchableTranslations;
      });
  }

  private initSearchDebounce(): void {
    this.searchDebouncer$
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged(),
        map(val => trimStart(val))
      )
      .subscribe((val: string) => {
        this.searchResults = [];
        if (val) {
          this.search(val);
        }
      });
  }

  /*
   * Search bar manipulation methods
   */
  onSearchBarShow(): void {
    this.focusSearchBarInput();
  }

  onSearchInputChange(event): void {
    this.searchDebouncer$.next(event);
  }

  /*
   * Search engine methods
   */
  search(queryString: string): void {
    let results = [];

    for (const currentSlideName of Object.keys(this.searchEngine.moduleTranslationsMap)) {
      const matchingItems: StandardOrDropdownTranslationItem[] = [];

      forEach(this.searchEngine.moduleTranslationsMap[currentSlideName], (value, key) => {
        const currentEntry = { key, value };

        // CASE: current entry is a plain translation
        if (
          currentEntry.value.hasOwnProperty('value') &&
          typeof currentEntry.value.value === 'string' &&
          !this.searchEngine.isUnwantedTranslationItem(value)
        ) {
          const sanitizedValue = currentEntry.value.value.replace(/(\r\n|\n|\r)/gm, ' '); // replacing new line symbol with a whitespace
          if (this.searchEngine.isQueryMatch(queryString, sanitizedValue) && !this.searchEngine.isUnwantedTranslationItem(value)) {
            matchingItems.push(value);
          }

          // CASE: current entry is a dropdown options translation (standard or grouped, excluding findings)
        } else if (this.searchEngine.isDropdownTranslationItem(currentEntry.value)) {
          matchingItems.push(...this.searchEngine.getMatchingDropdownTranslationItems(queryString, currentEntry));
        }
      });

      if (matchingItems.length) {
        results.push(
          new SlideSearchResults(currentSlideName, this.searchEngine.prepareMatchingControlsObj(matchingItems, currentSlideName))
        );
      }
    }

    results = this.searchEngine.sortResultsBySlidesOrder(results);
    results = this.searchEngine.prepareSlideNames(results);
    this.searchEngine.addMetaDataToResults(results).then(data => {
      results = data;
    });
    this.searchResults = results;
  }

  focusSearchBarInput(): void {
    this.input.nativeElement.select();
  }

  resetSearchQuery(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.searchDebouncer$.next('');
    this.focusSearchBarInput();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
