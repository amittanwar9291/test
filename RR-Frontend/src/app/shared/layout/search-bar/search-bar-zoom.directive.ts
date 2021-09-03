import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rrSideBarZoom]'
})
export class SearchBarZoomDirective implements AfterViewInit {
  zoom: number;

  @Input('rrSideBarZoom') set _zoom(val: number) {
    this.zoom = val;
    this.resizeContainer();
  }

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.resizeContainer();
  }

  resizeContainer(): void {
    const sideBarContainer = this.element.nativeElement.querySelector('.ui-sidebar');
    if (!sideBarContainer) {
      return;
    }
    this.renderer.setStyle(sideBarContainer, 'zoom', this.zoom);
  }
}
