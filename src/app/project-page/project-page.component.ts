import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PROJECTS_JSON from './../../assets/projects.json';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent {
  public projectID = this.route.snapshot.paramMap.get('projectID');
  public project = PROJECTS_JSON.find(({ id }) => id === this.projectID);
  constructor(private route: ActivatedRoute) {}
}
