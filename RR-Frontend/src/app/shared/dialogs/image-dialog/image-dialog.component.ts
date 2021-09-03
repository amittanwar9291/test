import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

// TO CALL
// this.dialogService.open(ImageDialogComponent, {
//   data: {imageSRC: imageSRC, imageName: imageName},
//   showHeader: false,
//   contentStyle: { padding: '0' },
//   closeOnEscape: true,
//   dismissableMask: true })

@Component({
  selector: 'rr-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent extends ResizableBaseComponent implements OnInit {
  @ViewChild('imageContainer') imageContainer: ElementRef;
  imageSRC: string;
  imageWidth = 659;
  imageHeight;
  imageZoom = 1;

  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private renderer2: Renderer2
  ) {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.renderImage(this.config.data.imageSRC);
  }

  renderImage(data) {
    this.imageSRC = data;
    setTimeout(() => {
      const ih: string = this.imageContainer.nativeElement.clientHeight + 'px';
      this.renderer2.setStyle(this.imageContainer.nativeElement, 'height', ih);
      this.imageHeight = this.imageContainer.nativeElement.clientHeight;
    });
  }

  close() {
    this.dialogService.dialogComponentRef.instance.close();
  }

  zoomIn() {
    this.imageZoom = this.imageZoom + 0.5;
  }

  zoomOut() {
    if (this.imageZoom > 1) {
      this.imageZoom = this.imageZoom - 0.5;
    }
  }

  print() {
    // todo set printing - currently not set due to Electron printing
  }
}
