import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vs-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="relative bg-ink-900 text-cream-100 overflow-hidden">
      <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cream-50/15 to-transparent"></div>
      <div class="orb-forest w-[600px] h-[600px] -bottom-64 -left-32 opacity-30"></div>

      <div class="container-x relative py-20 md:py-24">
        <div class="max-w-5xl mb-20">
          <p class="text-xs font-mono uppercase tracking-[0.18em] text-cream-100/50 mb-4">
            VerzaSites Studio
          </p>

          <h3 class="font-display font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightish text-balance">
            Custom websites, automation, and business tools
            <span class="italic text-gold-400">for growing companies.</span>
          </h3>

          <div class="mt-10">
            <a href="#contact" class="inline-flex items-center gap-3 group">
              <span class="font-display text-xl italic text-cream-50 link-underline">
                Start a conversation
              </span>

              <span class="w-10 h-10 rounded-full border border-cream-100/30 flex items-center justify-center group-hover:bg-gold-400 group-hover:border-gold-400 group-hover:text-ink-900 transition-all duration-500">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-12 border-t border-cream-100/10">
          <div>
            <div class="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#FBFAF5" />
                <path d="M9 9 L16 23 L23 9" stroke="#2F4F33" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <span class="font-display text-lg font-medium text-cream-50">
                VerzaSites
              </span>
            </div>

            <p class="text-sm text-cream-100/60 leading-relaxed max-w-xs">
              A boutique digital solutions studio for small businesses that need more than a website.
            </p>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase tracking-[0.16em] text-cream-100/40 mb-4">
              Navigate
            </h4>

            <ul class="space-y-3 text-sm">
              <li><a href="#services" class="text-cream-100/80 hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#work" class="text-cream-100/80 hover:text-gold-400 transition-colors">Work</a></li>
              <li><a href="#process" class="text-cream-100/80 hover:text-gold-400 transition-colors">Process</a></li>
              <li><a href="#about" class="text-cream-100/80 hover:text-gold-400 transition-colors">About</a></li>
              <li><a href="#contact" class="text-cream-100/80 hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase tracking-[0.16em] text-cream-100/40 mb-4">
              Services
            </h4>

            <ul class="space-y-3 text-sm">
              <li class="text-cream-100/80">Web design & development</li>
              <li class="text-cream-100/80">Automation & business systems</li>
              <li class="text-cream-100/80">Custom software & dashboards</li>
              <li class="text-cream-100/80">Internal tools & integrations</li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-mono uppercase tracking-[0.16em] text-cream-100/40 mb-4">
              Reach
            </h4>

            <ul class="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@verzasites.com" class="text-cream-100/80 hover:text-gold-400 transition-colors">
                  hello&#64;verzasites.com
                </a>
              </li>

              <li>
                <a href="https://wa.me/" target="_blank" rel="noopener" class="text-cream-100/80 hover:text-gold-400 transition-colors">
                  WhatsApp
                </a>
              </li>

              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noopener" class="text-cream-100/80 hover:text-gold-400 transition-colors">
                  LinkedIn
                </a>
              </li>

              <li>
                <a href="#contact" class="text-cream-100/80 hover:text-gold-400 transition-colors">
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-16 pt-8 border-t border-cream-100/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream-100/50 font-mono">
          <div>© {{ year }} VerzaSites · All rights reserved</div>

          <div class="flex items-center gap-4">
            <span>Crafted with Angular</span>
            <span class="w-1 h-1 rounded-full bg-cream-100/30"></span>
            <span>Designed for business outcomes</span>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
}