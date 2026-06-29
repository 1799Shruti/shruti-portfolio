import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  profile,
  navItems,
  stats,
  skillSet,
  experience,
  education,
  projects,
  contactDetails,
} from '../../data/portfolio.data';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  public profile: any;
  public navItems: any;
  public stats: any;
  public skillSet: any;
  public experience: any;
  public education: any;
  public projects: any;
  public contactDetails: any;
  ngOnInit(): void {
    this.profile = profile;
    this.navItems = navItems;
    this.stats = stats;
    this.skillSet = skillSet;
    this.experience = experience;
    this.education = education;
    this.projects = projects;
    this.contactDetails = contactDetails;
  }
}
