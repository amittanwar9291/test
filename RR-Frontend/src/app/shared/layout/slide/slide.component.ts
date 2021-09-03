import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { AuthorizedComponent } from '../../authorized/authorized.component';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { SearchBarComponent } from '@layout/search-bar/search-bar.component';

@Component({
  selector: 'rr-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent extends ResizableBaseComponent implements OnDestroy, OnInit {
  margin: string;
  searchBarVisible = false;

  @ViewChild(SearchBarComponent) searchBar: SearchBarComponent;

  @HostListener('document:keydown.control.f', ['$event']) openSearchbar(event: KeyboardEvent) {
    this.openSearchBar();
    event.preventDefault();
  }

  constructor(parent: AuthorizedComponent, private moduleLifecycles: ModuleLifecycleService) {
    super();
    parent.header = '';
  }

  ngOnInit() {
    super.ngOnInit();
    this.moduleLifecycles.triggerInit();
  }

  calculateRatio() {
    super.calculateRatio();
    this.margin = (-21.666667 / this.zoom).toString() + 'vh';
  }

  openSearchBar(): void {
    this.searchBarVisible = true;
  }

  onSearchBarShow(): void {
    this.searchBar.onSearchBarShow();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.moduleLifecycles.triggerDestroy();
  }
}
