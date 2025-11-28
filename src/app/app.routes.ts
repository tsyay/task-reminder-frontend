import { Routes } from '@angular/router';
import { RemindersPageComponent } from './pages/reminders-page/ui/reminders-page.component';
import { ReminderViewerComponent } from './features/reminder/view-reminder/ui/reminder-viewer.component';
import { NotFoundPageComponent } from './pages/not-found-page/ui/not-found-page.component';

export const routes: Routes = [
  {
    path: 'reminders',
    component: RemindersPageComponent,
  },
  {
    path: 'reminders/:id',
    component: ReminderViewerComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reminders',
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
