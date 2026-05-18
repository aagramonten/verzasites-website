import {
  Component,
  ChangeDetectionStrategy,
  HostListener,
  signal,
  inject,
  PLATFORM_ID,
} from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common";
import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

@Component({
  selector: "vs-navbar",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("mobileMenu", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("260ms cubic-bezier(0.22,1,0.36,1)", style({ opacity: 1 })),
        query(".m-link", [
          style({ opacity: 0, transform: "translateY(8px)" }),
          stagger(40, [
            animate(
              "320ms cubic-bezier(0.22,1,0.36,1)",
              style({ opacity: 1, transform: "translateY(0)" })
            ),
          ]),
        ], { optional: true }),
      ]),
      transition(":leave", [animate("180ms ease-in", style({ opacity: 0 }))]),
    ]),
  ],
  template: `
    <header
      class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      [class.nav-glass]="scrolled()"
      [class.border-b]="scrolled()"
      [class.border-ink-100]="scrolled()"
    >
      <div class="container-x">
        <nav class="flex items-center justify-between h-16 md:h-20">
          <!-- Logo -->
          <a href="#top" class="group flex items-center gap-2.5" aria-label="VerzaSites home">
            <span class="relative">
              <span class="absolute inset-0 rounded-lg bg-forest-500/0 group-hover:bg-forest-500/8 transition-colors duration-500"></span>
              <svg
                width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="relative transition-transform duration-500 group-hover:rotate-6"
              >
                <rect width="32" height="32" rx="8" fill="#2F4F33" />
                <path d="M9 9 L16 23 L23 9" stroke="#FBFAF5" stroke-width="2.5"
                      fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span class="font-display text-xl font-medium tracking-tightish text-ink-900">
              Verza<span class="text-forest-500">Sites</span>
            </span>
          </a>

          <!-- Desktop links -->
          <ul class="hidden lg:flex items-center gap-1">
            <li *ngFor="let item of links">
              <a
                [href]="item.href"
                class="px-4 py-2 rounded-full text-sm font-medium text-ink-700 hover:text-forest-500 hover:bg-ink-100/50 transition-all duration-300"
              >{{ item.label }}</a>
            </li>
          </ul>

          <!-- CTA group -->
          <div class="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              class="text-sm font-medium text-ink-700 link-underline hover:text-forest-500"
            >Get in touch</a>
            <a href="#contact" class="btn-primary text-sm">
              Book a Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <!-- Mobile burger -->
          <button
            type="button"
            (click)="toggleMobile()"
            class="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink-200 hover:border-forest-500 transition-colors"
            [attr.aria-expanded]="mobileOpen()"
            aria-label="Toggle menu"
          >
            <span class="relative w-4 h-3 flex flex-col justify-between items-end">
              <span class="block h-[1.5px] bg-ink-900 transition-all duration-300"
                    [class.w-4]="!mobileOpen()" [class.w-4-rot]="mobileOpen()"
                    [style.transform]="mobileOpen() ? 'translateY(5px) rotate(45deg)' : 'none'"
                    style="width: 1rem;"></span>
              <span class="block h-[1.5px] bg-ink-900 transition-all duration-300"
                    [style.opacity]="mobileOpen() ? 0 : 1"
                    style="width: 0.75rem;"></span>
              <span class="block h-[1.5px] bg-ink-900 transition-all duration-300"
                    [style.transform]="mobileOpen() ? 'translateY(-5px) rotate(-45deg)' : 'none'"
                    style="width: 1rem;"></span>
            </span>
          </button>
        </nav>
      </div>

      <!-- Mobile panel -->
      <div
        *ngIf="mobileOpen()"
        @mobileMenu
        class="lg:hidden absolute inset-x-0 top-full nav-glass border-t border-ink-100"
      >
        <div class="container-x py-8">
          <ul class="space-y-1">
            <li *ngFor="let item of links">
              <a
                [href]="item.href"
                (click)="close()"
                class="m-link flex items-center justify-between py-4 border-b border-ink-100 text-lg font-display font-medium text-ink-900 hover:text-forest-500 transition-colors"
              >
                <span>{{ item.label }}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
          </ul>
          <div class="mt-8 grid grid-cols-1 gap-3">
            <a href="#contact" (click)="close()" class="btn-primary w-full justify-center">
              Book a Call
            </a>
            <a href="https://wa.me/" (click)="close()" target="_blank" rel="noopener"
               class="btn-secondary w-full justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1c-.2.2-.4.2-.7.1-1-.4-2-1.1-2.8-2.1-.7-.9-1.1-1.6-1.2-1.9-.1-.3 0-.4.1-.5.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.4c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  readonly scrolled = signal(false);
  readonly mobileOpen = signal(false);

  readonly links = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  @HostListener("window:scroll")
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 12);
  }

  toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }
  close(): void {
    this.mobileOpen.set(false);
  }
}