import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page/client-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  {
    path: 'client',
    children: [
      {
        path: ':clientID',
        component: ClientPageComponent,
      },
    ],
  },
  {
    path: 'project',
    children: [
      {
        path: ':projectID',
        component: ProjectPageComponent,
      },
    ],
  },
  {
    path: '',
    component: DashboardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
