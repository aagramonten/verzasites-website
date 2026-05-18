import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'vs-process',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="process" class="relative py-24 md:py-36">
      <div class="container-x">
        <div class="max-w-3xl mb-16">
          <div class="flex items-center gap-4 mb-6" vsReveal>
            <span class="section-num">03 — Process</span>
            <span class="h-px flex-1 bg-ink-200 max-w-24"></span>
          </div>

          <h2 class="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tightish text-ink-900 text-balance" vsReveal>
            A clear process from idea
            <span class="italic text-forest-500">to launch.</span>
          </h2>

          <p class="mt-6 text-lg text-ink-600 max-w-2xl text-pretty" vsReveal [vsRevealDelay]="120">
            Every project starts with understanding the business first. Then we plan, build, test, and launch a solution that supports real operations.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-5">
          <article *ngFor="let step of steps; let i = index"
            class="card-premium p-7"
            vsReveal
            [vsRevealDelay]="i * 120"
          >
            <p class="font-mono text-xs tracking-[0.16em] text-ink-400 mb-8">
              0{{ i + 1 }}
            </p>

            <h3 class="font-display text-2xl font-medium text-ink-900 mb-4">
              {{ step.title }}
            </h3>

            <p class="text-ink-600 leading-relaxed">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class ProcessComponent {
  readonly steps = [
    {
      title: 'Discovery',
      description: 'Understand your business, goals, customers, current workflow, and where technology can help.',
    },
    {
      title: 'Strategy',
      description: 'Plan the website, automation, dashboard, or digital workflow around your business needs.',
    },
    {
      title: 'Build',
      description: 'Design and develop a clean, fast, responsive, and easy-to-use digital solution.',
    },
    {
      title: 'Launch & Support',
      description: 'Deploy, test, improve, and support the system after launch so it keeps working for your business.',
    },
  ];
}