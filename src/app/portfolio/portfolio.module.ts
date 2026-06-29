import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { portfolioRoutes } from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LandingPageComponent,
    RouterModule.forChild(portfolioRoutes),
  ],
})
export class PortfolioModule {}
