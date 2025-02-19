import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { MoredetailsComponent } from './moredetails/moredetails.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'comingsoon', component: ComingSoonComponent },
    { path: 'moredetails', component: MoredetailsComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'payments', component: PaymentModalComponent }   

 
];
