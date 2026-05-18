import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { trigger, transition, style, animate, query, stagger } from "@angular/animations";

@Component({
  selector: "vs-hero",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("heroEnter", [
      transition(":enter", [
        query(".hero-stagger", [
          style({ opacity: 0, transform: "translateY(28px)" }),
          stagger(120, [
            animate(
              "900ms cubic-bezier(0.22,1,0.36,1)",
              style({ opacity: 1, transform: "translateY(0)" })
            ),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],
  template: `
    <section
      id="top"
      class="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden noise-layer"
      @heroEnter
    >
      <!-- Background grid + orbs -->
      <div class="absolute inset-0 hero-grid pointer-events-none"></div>
      <div class="orb-forest w-[520px] h-[520px] -top-32 -left-32 animate-pulse-slow"></div>
      <div class="orb-gold w-[420px] h-[420px] top-1/3 -right-24 animate-pulse-slow"
           style="animation-delay: 2s;"></div>

      <div class="container-x relative">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <!-- LEFT: copy -->
          <div class="lg:col-span-7">
            <div class="hero-stagger eyebrow mb-8">
              <span>Boutique digital studio</span>
              <span class="ml-2 inline-flex items-center gap-1.5 text-forest-600">
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full rounded-full bg-forest-400 opacity-60 animate-ping"></span>
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-forest-500"></span>
                </span>
                Accepting new projects
              </span>
            </div>

            <h1 class="hero-stagger font-display font-light text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.25rem] tracking-tightest text-ink-900 text-balance">
              Custom websites <span class="italic font-normal text-forest-500">&amp;</span><br/>
              business automation
              <span class="block mt-1">
                <span class="relative inline-block">
                  <span class="relative z-10 italic font-normal">that help you grow.</span>
                  <span class="absolute -bottom-1 left-0 right-0 h-[10px] md:h-3 bg-gold-400/35 -rotate-1"></span>
                </span>
              </span>
            </h1>

            <p class="hero-stagger mt-8 max-w-xl text-lg md:text-xl text-ink-600 leading-relaxed text-pretty">
              VerzaSites helps small businesses modernize their online presence,
              capture more leads, and automate daily operations with practical,
              custom digital solutions.
            </p>

            <!-- CTAs -->
            <div class="hero-stagger mt-10 flex flex-wrap items-center gap-3">
              <a href="#contact" class="btn-primary">
                Book a Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#work" class="btn-secondary">View Work</a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener"
                class="btn inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-ink-900 hover:text-forest-500 group"
                aria-label="Contact via WhatsApp"
              >
                <span class="w-9 h-9 rounded-full bg-forest-50 flex items-center justify-center group-hover:bg-forest-500 group-hover:text-cream-50 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1c-.2.2-.4.2-.7.1-1-.4-2-1.1-2.8-2.1-.7-.9-1.1-1.6-1.2-1.9-.1-.3 0-.4.1-.5.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.4c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
                  </svg>
                </span>
                <span class="text-sm font-medium">WhatsApp</span>
              </a>
            </div>

            <!-- Trust line -->
            <div class="hero-stagger mt-12 pt-8 border-t border-ink-100 flex flex-wrap items-center gap-x-6 gap-y-3">
              <p class="text-xs font-mono uppercase tracking-[0.16em] text-ink-500">
                Websites · Dashboards · Automations · Internal tools
              </p>
            </div>
          </div>

          <!-- RIGHT: dashboard mockup -->
          <div class="lg:col-span-5 hero-stagger relative">
            <div class="relative">
              <!-- Floating accent card -->
              <div class="absolute -top-6 -left-6 z-20 mockup-window rounded-2xl p-4 w-52 hidden md:block hover:-translate-y-1 transition-transform duration-500">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-8 h-8 rounded-lg bg-forest-50 flex items-center justify-center text-forest-500">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M3 3v18h18" stroke-linecap="round"/>
                      <path d="M7 14l4-4 3 3 5-5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-[10px] font-mono uppercase tracking-wider text-ink-500">Leads</div>
                    <div class="font-display text-xl font-medium text-ink-900">+38%</div>
                  </div>
                </div>
                <div class="text-[11px] text-ink-500">vs last month</div>
              </div>

              <!-- Floating bottom card -->
              <div class="absolute -bottom-8 -right-4 z-20 mockup-window rounded-2xl p-4 w-56 hidden md:block hover:-translate-y-1 transition-transform duration-500"
                   style="animation-delay: 600ms;">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-[10px] font-mono uppercase tracking-wider text-ink-500">Automation</span>
                  <span class="text-[10px] font-mono text-forest-500">● Active</span>
                </div>
                <div class="flex items-center gap-2 mb-1">
                  <div class="w-6 h-6 rounded-full bg-forest-500 flex items-center justify-center text-cream-50 text-[10px]">F</div>
                  <span class="text-xs text-ink-700">Form submitted</span>
                </div>
                <div class="w-px h-3 bg-ink-200 ml-3"></div>
                <div class="flex items-center gap-2 mb-1">
                  <div class="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center text-cream-50 text-[10px]">@</div>
                  <span class="text-xs text-ink-700">Email sent</span>
                </div>
                <div class="w-px h-3 bg-ink-200 ml-3"></div>
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-ink-900 flex items-center justify-center text-cream-50 text-[10px]">C</div>
                  <span class="text-xs text-ink-700">CRM updated</span>
                </div>
              </div>

              <!-- Main dashboard mockup -->
              <div class="relative mockup-window rounded-2xl overflow-hidden">
                <!-- Window chrome -->
                <div class="flex items-center justify-between px-4 py-3 border-b border-ink-100 bg-cream-100/50">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-ink-200"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-ink-200"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-ink-200"></span>
                  </div>
                  <div class="text-[10px] font-mono text-ink-400">verzasites.app/dashboard</div>
                  <div class="w-8"></div>
                </div>

                <!-- Mockup content -->
                <div class="p-5 space-y-4">
                  <!-- Header -->
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="text-[10px] font-mono uppercase tracking-wider text-ink-500">Overview</div>
                      <div class="font-display text-lg font-medium text-ink-900">This week</div>
                    </div>
                    <div class="flex gap-1">
                      <span class="chip">7d</span>
                      <span class="chip bg-forest-500 text-cream-50 border-forest-500">30d</span>
                    </div>
                  </div>

                  <!-- Stats grid -->
                  <div class="grid grid-cols-3 gap-2">
                    <div class="p-3 rounded-xl bg-cream-100 border border-ink-100">
                      <div class="text-[9px] font-mono uppercase text-ink-500 mb-1">Leads</div>
                      <div class="font-display text-xl font-medium text-ink-900">142</div>
                      <div class="text-[9px] text-forest-500 mt-1">↑ 38%</div>
                    </div>
                    <div class="p-3 rounded-xl bg-cream-100 border border-ink-100">
                      <div class="text-[9px] font-mono uppercase text-ink-500 mb-1">Booked</div>
                      <div class="font-display text-xl font-medium text-ink-900">48</div>
                      <div class="text-[9px] text-forest-500 mt-1">↑ 22%</div>
                    </div>
                    <div class="p-3 rounded-xl bg-forest-500 text-cream-50">
                      <div class="text-[9px] font-mono uppercase opacity-70 mb-1">Revenue</div>
                      <div class="font-display text-xl font-medium">$24.8k</div>
                      <div class="text-[9px] mt-1 opacity-80">↑ 41%</div>
                    </div>
                  </div>

                  <!-- Chart -->
                  <div class="p-4 rounded-xl bg-cream-100 border border-ink-100">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-[10px] font-mono uppercase tracking-wider text-ink-500">Lead flow</span>
                      <span class="text-[10px] font-mono text-ink-700">Aug · Sep · Oct</span>
                    </div>
                    <svg viewBox="0 0 220 70" class="w-full h-16">
                      <defs>
                        <linearGradient id="lf" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stop-color="#2F4F33" stop-opacity="0.25"/>
                          <stop offset="100%" stop-color="#2F4F33" stop-opacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,55 L20,48 L40,52 L60,40 L80,42 L100,30 L120,32 L140,22 L160,24 L180,14 L200,16 L220,8"
                            stroke="#2F4F33" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M0,55 L20,48 L40,52 L60,40 L80,42 L100,30 L120,32 L140,22 L160,24 L180,14 L200,16 L220,8 L220,70 L0,70 Z"
                            fill="url(#lf)"/>
                      <circle cx="220" cy="8" r="3" fill="#2F4F33"/>
                      <circle cx="220" cy="8" r="6" fill="#2F4F33" fill-opacity="0.2"/>
                    </svg>
                  </div>

                  <!-- Activity row -->
                  <div class="flex items-center gap-3 p-3 rounded-xl bg-cream-100 border border-ink-100">
                    <div class="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-600">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 4L12 14.01l-3-3" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <div class="text-xs text-ink-900 font-medium">New quote request — Garden Design Co.</div>
                      <div class="text-[10px] text-ink-500">Auto-assigned · 2m ago</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Soft ring decoration -->
              <div class="absolute -z-10 -bottom-12 -right-12 w-48 h-48 rounded-full border border-forest-200/60"></div>
              <div class="absolute -z-10 -top-12 -right-8 w-32 h-32 rounded-full border border-gold-500/20"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo marquee at bottom -->
      <div class="relative mt-20 md:mt-28">
        <div class="container-x mb-6">
          <p class="text-center text-xs font-mono uppercase tracking-[0.18em] text-ink-500">
            Trusted positioning for businesses like yours
          </p>
        </div>
        <div class="overflow-hidden mask-edges relative">
          <div class="marquee-track flex items-center gap-12 whitespace-nowrap">
            <ng-container *ngFor="let _ of [].constructor(2)">
              <span *ngFor="let item of marqueeItems"
                    class="flex items-center gap-3 font-display text-2xl md:text-3xl text-ink-400 italic font-light">
                {{ item }}
                <span class="text-forest-300">✦</span>
              </span>
            </ng-container>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .mask-edges {
      mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
    }
  `],
})
export class HeroComponent {
  readonly marqueeItems = [
    "Landscaping",
    "Restaurants",
    "Insurance",
    "Contractors",
    "Nurseries",
    "Local services",
    "Boutique retail",
    "Studios",
  ];
}