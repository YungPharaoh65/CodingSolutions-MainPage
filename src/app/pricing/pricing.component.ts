import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  enroll() {
    window.open('https://wa.me/message/UE6XNJVTRE7IM1', '_blank');
  }

  isRotating = false;

  

  isDesktop: boolean = false; // Default value set to false

  ngOnInit(): void {
    this.checkDevice(); // Check device on initialization
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


}
