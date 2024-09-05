import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
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

    // Simulate navigation delay or any async operation
    setTimeout(() => {
      this.isLoading = false;
      // Perform actual navigation logic if needed
    }, 2000); // Adjust the time as necessary
  }
}
