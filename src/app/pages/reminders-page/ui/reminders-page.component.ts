import { Component } from '@angular/core';
import { RemindersTableComponent } from '../../../features/reminder/list-reminders/ui/reminders-table.component';

@Component({
    standalone: true,
      selector: 'app-reminders-page',
      templateUrl: './reminders-page.component.html',
      imports: [RemindersTableComponent],
})

export class RemindersPageComponent {}
