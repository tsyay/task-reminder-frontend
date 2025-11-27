import { Routes } from '@angular/router';
import { RemindersPageComponent } from './pages/reminders-page/ui/reminders-page.component';
import { ReminderViewerComponent } from './features/reminder/view-reminder/ui/reminder-viewer.component';

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
];
