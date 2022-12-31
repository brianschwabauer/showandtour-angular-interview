import { Component } from '@angular/core';
import PROJECTS_JSON from './../../../assets/projects.json';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  public projects = PROJECTS_JSON;
}
