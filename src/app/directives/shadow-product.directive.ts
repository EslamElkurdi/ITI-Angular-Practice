import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';


@Directive({
  selector: '[appShadowProduct]',
  standalone: true
})
export class ShadowProductDirective {

  @Input('appProductCard') borderColor: string = 'red';
  @Input() bgColor: string = '#fff';

  constructor(private el: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${this.borderColor}`);
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 4px 8px rgba(1, 0, 0, 0.1)');
  }

  ngOnInit() {

    // this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
    // this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${this.borderColor}`);
    // this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 4px 8px rgba(1, 0, 0, 0.1)');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBoxShadow('0 8px 16px rgba(0, 0, 0, 0.9)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBoxShadow('0 4px 8px rgba(0, 0, 0, 0.1)');
  }

  private setBoxShadow(shadow: string) {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadow);
  }
}
