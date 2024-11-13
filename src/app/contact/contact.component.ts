import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { ComingSoonComponent } from "../coming-soon/coming-soon.component";
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, RouterLink, ComingSoonComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] // Corrected to styleUrls
})
export class ContactComponent implements OnInit {

  //Default Set Up for Desktop Option
  isDesktop: boolean = false; // Default value set to false

  ngOnInit(): void {
    this.checkDevice(); // Check device on initialization
    this.triggerFadeIn(); // Trigger fade-in effect
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkDevice(); // Check device on window resize
  }

  checkDevice() {
    const width = window.innerWidth;
    this.isDesktop = width >= 1025;
    console.log(`Screen width: ${width}, Is Desktop: ${this.isDesktop}`);
  }

  triggerFadeIn() {
    const containElement = document.querySelector('.contain');
    if (containElement) {
      containElement.classList.add('contain');
    }
  }

  //Option to rely data to SQL Page from Netlify serverless data:
  async onSubmit(form: NgForm) {
    // Prevent form submission if invalid
    if (form.invalid) {
      return;
    }

    const data = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    };

    try {
      const response = await fetch('/.netlify/functions/submit_contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        form.reset(); // Optionally reset the form
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  }

  
}
