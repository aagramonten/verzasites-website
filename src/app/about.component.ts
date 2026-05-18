import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'vs-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="about" class="relative py-24 md:py-36 bg-cream-100/50">
      <div class="container-x">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-5" vsReveal>
            <div class="rounded-3xl bg-forest-500 text-cream-50 p-8 md:p-10 shadow-2xl">
              <p class="text-xs font-mono uppercase tracking-[0.18em] text-cream-100/70 mb-8">
                About VerzaSites
              </p>

              <h2 class="font-display text-4xl md:text-5xl font-light leading-tight">
                More than a website.
                <span class="block italic text-gold-400">A system for growth.</span>
              </h2>

              <p class="mt-8 text-cream-100/80 leading-relaxed">
                VerzaSites helps businesses create digital tools that improve how they attract customers, capture leads, organize work, and operate day to day.
              </p>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="flex items-center gap-4 mb-6" vsReveal>
              <span class="section-num">04 — About</span>
              <span class="h-px flex-1 bg-ink-200 max-w-24"></span>
            </div>

            <h2 class="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tightish text-ink-900 text-balance" vsReveal>
              Built for business owners who need
              <span class="italic text-forest-500">practical digital solutions.</span>
            </h2>

            <p class="mt-6 text-lg text-ink-600 leading-relaxed text-pretty" vsReveal [vsRevealDelay]="120">
              I’m a software developer focused on helping businesses use technology to grow, save time, and operate more efficiently. Through VerzaSites, I build websites, dashboards, automations, and internal tools that solve real business problems.
            </p>

            <div class="grid sm:grid-cols-2 gap-4 mt-10">
              <div *ngFor="let item of values; let i = index"
                class="p-5 rounded-2xl bg-white/70 border border-ink-100"
                vsReveal
                [vsRevealDelay]="i * 100"
              >
                <h3 class="font-display text-xl text-ink-900 mb-2">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-ink-600 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly values = [
    {
      title: 'Business-first',
      description: 'Every decision is based on what helps the business get more leads, save time, or operate better.',
    },
    {
      title: 'Custom systems',
      description: 'No generic templates. Solutions are shaped around the actual workflow of the business.',
    },
    {
      title: 'Clean execution',
      description: 'Modern UI, responsive layouts, practical features, and a clear customer experience.',
    },
    {
      title: 'Support after launch',
      description: 'The goal is not just to launch, but to keep improving the system as the business grows.',
    },
  ];
}
