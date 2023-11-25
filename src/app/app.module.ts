import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app--routing.module';
import { WebdesignComponent } from './webdesign/webdesign.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { CloudServicesComponent } from './cloud-services/cloud-services.component';
import { CareerComponent } from './career/career.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { EmploymentComponent } from './employment/employment.component';
import { IntrernshipComponent } from './intrernship/intrernship.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WebdesignComponent,
    DigitalMarketingComponent,
    CloudServicesComponent,
    CareerComponent,
    OurTeamComponent,
    EmploymentComponent,
    IntrernshipComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
