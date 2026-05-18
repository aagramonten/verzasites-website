import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RevealDirective } from "../reveal.directive";

interface Service {
  num: string;
  title: string;
  description: string;
  features: string[];
  icon: "web" | "automation" | "software";
}

@Component({
  selector: "vs-services",
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="services" class="relative py-24 md:py-36">
      <div class="container-x">
        <!-- Section header -->
        <div class="max-w-3xl mb-16 md:mb-24">
          <div class="flex items-center gap-4 mb-6" vsReveal>
            <span class="section-num">01 — Services</span>
            <span class="h-px flex-1 bg-ink-200 max-w-24"></span>
          </div>
          <h2 class="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tightish text-ink-900 text-balance"
              vsReveal>
            Three ways VerzaSites helps
            <span class="italic text-forest-500">your business grow.</span>
          </h2>
          <p class="mt-6 text-lg text-ink-600 max-w-2xl text-pretty" vsReveal [vsRevealDelay]="120">
            Whether you need a website that converts, an automated workflow that
            replaces manual work, or an internal tool that organizes your operations
            — we build practical solutions around how your business actually runs.
          </p>
        </div>

        <!-- Service grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            *ngFor="let service of services; let i = index"
            class="card-premium p-8 md:p-10 group flex flex-col"
            vsReveal
            [vsRevealDelay]="i * 140"
          >
            <!-- Index + icon -->
            <div class="flex items-start justify-between mb-8">
              <div class="icon-tile">
                <ng-container [ngSwitch]="service.icon">
                  <svg *ngSwitchCase="'web'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="4" width="18" height="14" rx="2"/>
                    <path d="M3 8h18"/>
                    <path d="M8 21h8"/>
                    <path d="M12 18v3"/>
                  </svg>
                  <svg *ngSwitchCase="'automation'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.4.97 1.35 1.65 2.4 1.65H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                  <svg *ngSwitchCase="'software'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3 3v18h18"/>
                    <rect x="7" y="13" width="3" height="5"/>
                    <rect x="12" y="9" width="3" height="9"/>
                    <rect x="17" y="6" width="3" height="12"/>
                  </svg>
                </ng-container>
              </div>
              <span class="font-mono text-xs text-ink-400 tracking-wider">{{ service.num }}</span>
            </div>

            <!-- Title + description -->
            <h3 class="font-display text-2xl md:text-[1.65rem] font-medium tracking-tightish text-ink-900 leading-tight mb-4 group-hover:text-forest-600 transition-colors duration-500">
              {{ service.title }}
            </h3>
            <p class="text-ink-600 leading-relaxed mb-8 text-pretty">{{ service.description }}</p>

            <!-- Feature list -->
            <ul class="space-y-2.5 mb-8 mt-auto">
              <li *ngFor="let f of service.features" class="flex items-start gap-3 text-sm text-ink-700">
                <span class="mt-1.5 w-1 h-1 rounded-full bg-forest-500 flex-shrink-0"></span>
                <span>{{ f }}</span>
              </li>
            </ul>

            <a href="#contact"
               class="inline-flex items-center gap-2 text-sm font-medium text-forest-500 group-hover:gap-3 transition-all duration-500">
              <span class="link-underline">Discuss this service</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7"/>
              </svg>
            </a>
          </article>
        </div>

        <!-- Bottom stripe -->
        <div class="mt-16 p-6 md:p-8 rounded-2xl bg-cream-100 border border-ink-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
             vsReveal>
          <p class="text-ink-700 max-w-2xl">
            <span class="font-display italic text-forest-500">Not sure where to start?</span>
            A short call helps us identify the right solution — website, automation, or internal system — for your business.
          </p>
          <a href="#contact" class="btn-primary flex-shrink-0">
            Book a discovery call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  readonly services: Service[] = [
    {
      num: "S/01",
      title: "Web Design & Development",
      icon: "web",
      description:
        "High-converting websites built to help your business look professional, capture leads, and make it easier for customers to contact you.",
      features: [
        "Business websites & landing pages",
        "Custom builds, not templates",
        "Quote request & catalog systems",
        "Mobile-first, SEO-friendly structure",
        "Built to convert visitors into leads",
      ],
    },
    {
      num: "S/02",
      title: "Automation & Business Systems",
      icon: "automation",
      description:
        "Automate repetitive tasks, organize leads, and create workflows that save time and reduce manual work across your team.",
      features: [
        "Lead capture & follow-up automation",
        "Appointment scheduling",
        "Form-to-CRM and form-to-email logic",
        "WhatsApp & messaging integrations",
        "Custom workflow design",
      ],
    },
    {
      num: "S/03",
      title: "Custom Software & IT Solutions",
      icon: "software",
      description:
        "Custom dashboards and internal tools that help teams manage information, track operations, and make better decisions.",
      features: [
        "Dashboards & reporting tools",
        "Admin panels & internal portals",
        "Inventory management systems",
        "API & database integrations",
        "Tools built around real workflows",
      ],
    },
  ];
}