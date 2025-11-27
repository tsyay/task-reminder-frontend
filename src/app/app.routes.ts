import { Routes } from '@angular/router';
import { RemindersPageComponent } from './pages/reminders-page/ui/reminders-page.component';

export const routes: Routes = [
  {
    path: 'reminders',
    component: RemindersPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reminders',
  },
];
