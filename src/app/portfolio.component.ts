import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

interface Project {
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
}

@Component({
  selector: 'vs-portfolio',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="work" class="relative py-24 md:py-36 bg-cream-100/50">
      <div class="container-x">
        <div class="max-w-3xl mb-16 md:mb-20">
          <div class="flex items-center gap-4 mb-6" vsReveal>
            <span class="section-num">02 — Work</span>
            <span class="h-px flex-1 bg-ink-200 max-w-24"></span>
          </div>

          <h2
            class="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tightish text-ink-900 text-balance"
            vsReveal
          >
            Digital solutions designed around
            <span class="italic text-forest-500">real business needs.</span>
          </h2>

          <p class="mt-6 text-lg text-ink-600 max-w-2xl text-pretty" vsReveal [vsRevealDelay]="120">
            A selection of business-focused website, automation, and internal tool concepts built to help companies
            capture leads, organize operations, and serve customers faster.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <article
            *ngFor="let project of projects; let i = index"
            class="card-premium p-6 md:p-8 group"
            vsReveal
            [vsRevealDelay]="i * 120"
          >
            <div class="mb-6 rounded-2xl bg-cream-50 border border-ink-100 p-5 overflow-hidden">
              <div class="flex items-center justify-between mb-5">
                <div>
                  <p class="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-500">
                    {{ project.category }}
                  </p>
                  <h3 class="font-display text-2xl font-medium text-ink-900 mt-1">
                    {{ project.title }}
                  </h3>
                </div>

                <div class="w-10 h-10 rounded-full bg-forest-50 text-forest-500 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-3 mb-4">
                <div class="h-20 rounded-xl bg-white border border-ink-100"></div>
                <div class="h-20 rounded-xl bg-white border border-ink-100"></div>
                <div class="h-20 rounded-xl bg-forest-500"></div>
              </div>

              <div class="h-3 rounded-full bg-ink-100 mb-2"></div>
              <div class="h-3 rounded-full bg-ink-100 w-2/3"></div>
            </div>

            <div class="space-y-5">
              <div>
                <p class="text-xs font-mono uppercase tracking-[0.16em] text-ink-400 mb-2">Problem</p>
                <p class="text-ink-700 leading-relaxed">{{ project.problem }}</p>
              </div>

              <div>
                <p class="text-xs font-mono uppercase tracking-[0.16em] text-ink-400 mb-2">Solution</p>
                <p class="text-ink-700 leading-relaxed">{{ project.solution }}</p>
              </div>

              <div>
                <p class="text-xs font-mono uppercase tracking-[0.16em] text-ink-400 mb-2">Result</p>
                <p class="text-ink-700 leading-relaxed">{{ project.result }}</p>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                *ngFor="let tag of project.tags"
                class="text-xs px-3 py-1.5 rounded-full border border-ink-100 bg-white/70 text-ink-600"
              >
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class PortfolioComponent {
  readonly projects: Project[] = [
    {
      title: 'Nursery WhatsApp Catalog',
      category: 'Catalog / Ordering',
      problem: 'Customers were asking for product availability manually through WhatsApp and social media.',
      solution: 'Built a searchable product catalog with plant availability, pricing, and direct WhatsApp ordering.',
      result: 'Faster communication, better product visibility, and a smoother buying process.',
      tags: ['Angular', 'Catalog', 'WhatsApp', 'Inventory'],
    },
    {
      title: 'Restaurant Ordering Concept',
      category: 'Food / Booking',
      problem: 'Restaurants need a simple way to show menus, receive orders, and reduce repetitive questions.',
      solution: 'Designed a modern ordering and reservation concept with direct customer action flows.',
      result: 'A cleaner customer experience and easier lead/order capture.',
      tags: ['Website', 'Ordering', 'Reservations', 'Mobile-first'],
    },
    {
      title: 'Insurance Lead Website',
      category: 'Lead Generation',
      problem: 'Insurance agents need qualified leads, not just a basic online presence.',
      solution: 'Created a conversion-focused landing page structure with quote forms and clear CTAs.',
      result: 'More direct inquiries and a stronger professional presence.',
      tags: ['Landing Page', 'Forms', 'Leads', 'CRM'],
    },
    {
      title: 'Contractor Estimate Requests',
      category: 'Service Business',
      problem: 'Contractors often receive incomplete requests and lose time asking for basic project details.',
      solution: 'Built a quote request flow that collects project type, budget, timeline, and contact information.',
      result: 'Better qualified leads and less back-and-forth before estimates.',
      tags: ['Forms', 'Automation', 'Quotes', 'Service Business'],
    },
    {
      title: 'Internal Reporting Dashboard',
      category: 'Dashboard',
      problem: 'Teams needed a cleaner way to review operational information and make decisions faster.',
      solution: 'Created dashboard concepts with filters, metrics, charts, and organized data views.',
      result: 'Improved visibility, faster reporting, and better internal workflows.',
      tags: ['Dashboard', 'Reports', 'Data', 'Admin Tools'],
    },
    {
      title: 'Inventory Management System',
      category: 'Operations',
      problem: 'Businesses using spreadsheets or memory to track inventory can lose visibility and profit.',
      solution: 'Designed an inventory system with product status, pricing, stock, and restock workflows.',
      result: 'Cleaner operations and better visibility into stock and margins.',
      tags: ['Inventory', 'Database', 'Admin Panel', 'Automation'],
    },
  ];
}