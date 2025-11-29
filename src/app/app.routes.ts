import { Routes } from '@angular/router';
import { RemindersPageComponent } from './pages/reminders-page/reminders-page.component';
import { ReminderViewerComponent } from './features/reminder/view-reminder/ui/reminder-viewer.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ReminderCreatePageComponent } from './pages/reminder-create-page/reminder-create-page.component';
import { ReminderUpdatePageComponent } from './pages/reminder-update-page/reminder-update-page.component';

export const routes: Routes = [
  {
    path: 'reminders',
    component: RemindersPageComponent,
  },
  {
    path: 'reminders/new',
    component: ReminderCreatePageComponent,
  },
  {
    path: 'reminders/:id',
    component: ReminderUpdatePageComponent,
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
