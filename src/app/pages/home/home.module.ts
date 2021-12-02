import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetEarlyAccessComponent } from './get-early-access/get-early-access.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
  declarations: [
    HomeComponent,
    IntroComponent,
    TestimonialComponent,
    GetEarlyAccessComponent,
  ],
})
export class HomeModule {}
