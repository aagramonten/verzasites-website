import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isEnglish = true;
  whatsappNumber = '19392360534';

  get whatsappLink(): string {
    const message = this.isEnglish
      ? 'Hi, I want a website for my business. Can you guide me?'
      : 'Hola, quiero una página web para mi negocio. ¿Me puedes orientar?';

    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  toggleLanguage(): void {
    this.isEnglish = !this.isEnglish;
  }
}