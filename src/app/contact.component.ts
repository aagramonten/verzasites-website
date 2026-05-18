import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../reveal.directive';

interface FormModel {
  name: string;
  email: string;
  business: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

@Component({
  selector: 'vs-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="relative py-24 md:py-36">
      <div class="container-x">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <!-- Left copy -->
          <div class="lg:col-span-5">
            <div class="flex items-center gap-4 mb-6" vsReveal>
              <span class="section-num">07 — Get in touch</span>
              <span class="h-px flex-1 bg-ink-200 max-w-24"></span>
            </div>

            <h2 
              class="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tightish text-ink-900 leading-[1.05] text-balance"
              vsReveal
            >
              Ready to build a better
              <span class="italic text-forest-500">digital system</span>
              for your business?
            </h2>

            <p class="mt-8 text-lg text-ink-600 leading-relaxed max-w-xl text-pretty" vsReveal [vsRevealDelay]="120">
              Tell me what you're working on, and I’ll help you identify the best website, automation, or system for your business.
              Most replies happen within one business day.
            </p>

            <div class="mt-12 space-y-4" vsReveal [vsRevealDelay]="180">
              <a href="mailto:hello@verzasites.com" class="contact-card">
                <span class="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
                    <path d="M4 4h16v16H4z" stroke-linejoin="round"/>
                    <path d="M4 7l8 6 8-6" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>

                <span>
                  <span class="contact-label">Email</span>
                  <span class="contact-value">hello&#64;verzasites.com</span>
                </span>

                <span class="ml-auto text-ink-400">→</span>
              </a>

              <a href="https://wa.me/19392360534" target="_blank" rel="noopener" class="contact-card">
                <span class="contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1s-.8.9-1 1.1c-.2.2-.4.2-.7.1-1-.4-2-1.1-2.8-2.1-.7-.9-1.1-1.6-1.2-1.9-.1-.3 0-.4.1-.5.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5-1.4c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
                  </svg>
                </span>

                <span>
                  <span class="contact-label">WhatsApp</span>
                  <span class="contact-value">+1 939-236-0534</span>
                </span>

                <span class="ml-auto text-ink-400">→</span>
              </a>

              <a href="https://linkedin.com/in/verzasites" target="_blank" rel="noopener" class="contact-card">
                <span class="contact-icon font-bold text-sm">in</span>

                <span>
                  <span class="contact-label">LinkedIn</span>
                  <span class="contact-value">linkedin.com/in/verzasites</span>
                </span>

                <span class="ml-auto text-ink-400">→</span>
              </a>
            </div>
          </div>

          <!-- Right form card -->
          <div class="lg:col-span-7" vsReveal [vsRevealDelay]="160">
            <div class="rounded-[2rem] bg-white/80 border border-ink-100 shadow-[0_30px_90px_rgba(23,24,18,0.08)] p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur">
              <p class="text-xs font-mono uppercase tracking-[0.18em] text-forest-500 mb-4">
                Project inquiry
              </p>

              <h3 class="font-display text-3xl md:text-4xl font-light tracking-tightish text-ink-900 mb-10">
                Tell me about your project.
              </h3>

              <form class="space-y-8" (ngSubmit)="submit()">
                
                <!-- Basic fields -->
                <div class="grid md:grid-cols-2 gap-5">
                  <label class="field-group">
                    <span class="field-label">Your name</span>
                    <input
                      class="field-input"
                      type="text"
                      name="name"
                      [(ngModel)]="form().name"
                      placeholder="Jane Smith"
                    />
                  </label>

                  <label class="field-group">
                    <span class="field-label">Email</span>
                    <input
                      class="field-input"
                      type="email"
                      name="email"
                      [(ngModel)]="form().email"
                      placeholder="jane@business.com"
                    />
                  </label>

                  <label class="field-group">
                    <span class="field-label">Business name</span>
                    <input
                      class="field-input"
                      type="text"
                      name="business"
                      [(ngModel)]="form().business"
                      placeholder="Smith & Co."
                    />
                  </label>

                  <label class="field-group">
                    <span class="field-label">Phone / WhatsApp</span>
                    <input
                      class="field-input"
                      type="tel"
                      name="phone"
                      [(ngModel)]="form().phone"
                      placeholder="+1 (000) 000-0000"
                    />
                  </label>
                </div>

                <!-- Project type -->
                <div>
                  <p class="field-label mb-3">Project type</p>

                  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <button
                      *ngFor="let option of projectTypes"
                      type="button"
                      class="option-btn"
                      [class.option-selected]="form().projectType === option"
                      (click)="setProjectType(option)"
                    >
                      {{ option }}
                    </button>
                  </div>
                </div>

                <!-- Budget -->
                <div>
                  <p class="field-label mb-3">Budget range</p>

                  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <button
                      *ngFor="let option of budgets"
                      type="button"
                      class="option-btn"
                      [class.option-selected]="form().budget === option"
                      (click)="setBudget(option)"
                    >
                      {{ option }}
                    </button>
                  </div>
                </div>

                <!-- Message -->
                <label class="field-group block">
                  <span class="field-label">Message</span>
                  <textarea
                    class="field-input min-h-36 resize-none leading-relaxed"
                    name="message"
                    [(ngModel)]="form().message"
                    placeholder="A few sentences about your business, your goal, and what you're trying to solve."
                  ></textarea>
                </label>

                <div class="flex flex-col sm:flex-row sm:items-center gap-5">
                  <button type="submit" class="btn-primary w-full sm:w-auto">
                    Tell Me About Your Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7"/>
                    </svg>
                  </button>

                  <p class="text-sm text-ink-500 leading-relaxed">
                    Your details stay private. No spam — just a direct reply from VerzaSites.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      border-radius: 1.25rem;
      border: 1px solid var(--ink-100);
      background: rgba(255, 255, 255, 0.72);
      text-decoration: none;
      transition: all 0.25s ease;
    }

    .contact-card:hover {
      transform: translateY(-2px);
      border-color: var(--forest-200);
      box-shadow: 0 20px 50px rgba(23, 24, 18, 0.06);
    }

    .contact-icon {
      width: 3rem;
      height: 3rem;
      border-radius: 1rem;
      background: var(--forest-50);
      color: var(--forest-500);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .contact-label {
      display: block;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.68rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink-500);
      margin-bottom: 0.25rem;
    }

    .contact-value {
      display: block;
      color: var(--ink-900);
      font-size: 1rem;
      font-weight: 500;
    }

    .field-group {
      display: flex;
      flex-direction: column;
      gap: 0.55rem;
    }

    .field-label {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--ink-900);
    }

    .field-input {
      width: 100%;
      border-radius: 1rem;
      border: 1px solid var(--ink-100);
      background: rgba(251, 250, 245, 0.82);
      color: var(--ink-900);
      padding: 0.95rem 1rem;
      outline: none;
      transition: all 0.2s ease;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
    }

    .field-input::placeholder {
      color: var(--ink-400);
    }

    .field-input:focus {
      border-color: var(--forest-400);
      box-shadow: 0 0 0 4px rgba(47, 79, 51, 0.08);
      background: #fff;
    }

    .option-btn {
      min-height: 3.25rem;
      border-radius: 0.95rem;
      border: 1px solid var(--ink-100);
      background: rgba(251, 250, 245, 0.78);
      color: var(--ink-700);
      font-weight: 600;
      padding: 0.85rem 1rem;
      transition: all 0.2s ease;
      text-align: center;
    }

    .option-btn:hover {
      border-color: var(--forest-300);
      color: var(--forest-600);
      background: #fff;
      transform: translateY(-1px);
    }

    .option-selected {
      border-color: var(--forest-500);
      background: var(--forest-500);
      color: var(--cream-50);
      box-shadow: 0 14px 32px rgba(47, 79, 51, 0.16);
    }

    .option-selected:hover {
      background: var(--forest-600);
      color: var(--cream-50);
    }
  `],
})
export class ContactComponent {
  readonly projectTypes = [
    'Website',
    'Landing page',
    'Automation',
    'Dashboard',
    'Inventory system',
    'Booking system',
    'Quote request',
    'Other',
  ];

  readonly budgets = [
    'Under $500',
    '$500 – $1,500',
    '$1,500 – $3,000',
    '$3,000+',
  ];

  readonly form = signal<FormModel>({
    name: '',
    email: '',
    business: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  setProjectType(value: string): void {
    this.form.update((current) => ({
      ...current,
      projectType: value,
    }));
  }

  setBudget(value: string): void {
    this.form.update((current) => ({
      ...current,
      budget: value,
    }));
  }

  submit(): void {
    const data = this.form();

    const message = [
      'New project inquiry from VerzaSites website:',
      '',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Business: ${data.business}`,
      `Phone: ${data.phone}`,
      `Project type: ${data.projectType}`,
      `Budget: ${data.budget}`,
      '',
      `Message: ${data.message}`,
    ].join('\n');

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/19392360534?text=${encoded}`, '_blank');
  }
}