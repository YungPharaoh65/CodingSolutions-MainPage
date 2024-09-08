import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingComponent } from './pricing/pricing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxLoadingModule } from '@dchtools/ngx-loading-v18';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavbarComponent,
    LandingPageComponent,
    PricingComponent,
    NgxLoadingModule,
     FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


  
  title = 'coldingsolutions';
  darkMode: boolean = false;

  ngOnInit() {
    // Check localStorage for the dark mode preference
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    this.darkMode = storedDarkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }

  get mode(): string {
    return this.darkMode ? '🌜' : '🌞';
  }

  isLoading = false;
  onLinkClick() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // Simulate a 2-second loading time
  }
}
