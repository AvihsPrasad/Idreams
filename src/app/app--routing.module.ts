import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'webdesign', component: WebdesignComponent },
  { path: 'marketing', component: DigitalMarketingComponent },
  { path: 'cloud', component: CloudServicesComponent },
  { path: 'carrer', component: CareerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
