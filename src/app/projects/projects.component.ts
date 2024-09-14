import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) {}

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
}
