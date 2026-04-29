import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Variables para idioma y link principal de WhatsApp
  isEnglish = false;
  phoneNumber = '17871234567'; // <-- PON TU NÚMERO AQUÍ DE NUEVO (con 1 al principio)
  
  get whatsappLink(): string {
    const text = this.isEnglish 
      ? "Hi! I want a website for my business." 
      : "¡Hola! Quiero una página web para mi negocio.";
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(text)}`;
  }

  // Función para cambiar el idioma
  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
  }

  // Función para los botones de las tarjetas de ejemplos
  openWhatsApp(type: string = 'general') {
    let message = this.isEnglish 
      ? 'Hi, I am interested in creating a website for my business.' 
      : 'Hola, me interesa crear una página web para mi negocio.';
    
    if (type === 'landscaping') {
      message = this.isEnglish 
        ? 'Hi, I saw the Landscaping example and want something similar.' 
        : 'Hola, vi el ejemplo de Landscaping en su web y quiero algo similar.';
    } else if (type === 'nails') {
      message = this.isEnglish 
        ? 'Hi, I saw the Nail Salon example and want something similar.' 
        : 'Hola, vi el ejemplo del Nail Salon en su web y quiero algo similar.';
    } else if (type === 'insurance') {
      message = this.isEnglish 
        ? 'Hi, I saw the Insurance Agency example and want something similar.' 
        : 'Hola, vi el ejemplo de la Agencia de Seguros en su web y quiero algo similar.';
    } else if (type === 'doors') {
      message = this.isEnglish 
        ? 'Hi, I saw the Doors & Windows example and want something similar.' 
        : 'Hola, vi el ejemplo de Puertas y Ventanas en su web y quiero algo similar.';
    }
    
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}