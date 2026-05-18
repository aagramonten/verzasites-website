import { Directive, ElementRef, Input, AfterViewInit, Renderer2, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[vsReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit {
  @Input() vsRevealDelay = 0;

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    const element = this.el.nativeElement as HTMLElement;

    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'translateY(24px)');
    this.renderer.setStyle(element, 'transition', `opacity 700ms ease ${this.vsRevealDelay}ms, transform 700ms ease ${this.vsRevealDelay}ms`);

    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.setStyle(element, 'opacity', '1');
        this.renderer.setStyle(element, 'transform', 'translateY(0)');
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    observer.observe(element);
  }
}