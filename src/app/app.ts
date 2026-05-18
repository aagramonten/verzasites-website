import { Component } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { HeroComponent } from './hero.component';
import { ServicesComponent } from './services.component';
import { PortfolioComponent } from './portfolio.component';
import { ProcessComponent } from './process.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    PortfolioComponent,
    ProcessComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <vs-navbar></vs-navbar>

    <main>
      <vs-hero></vs-hero>
      <vs-services></vs-services>
      <vs-portfolio></vs-portfolio>
      <vs-process></vs-process>
      <vs-about></vs-about>
      <vs-contact></vs-contact>
    </main>

    <vs-footer></vs-footer>
  `,
})
export class App {}