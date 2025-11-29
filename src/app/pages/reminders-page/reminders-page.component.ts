import { Component } from '@angular/core';
import { RemindersTableComponent } from '../../features/reminder/list-reminders/ui/reminders-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-reminders-page',
  templateUrl: './reminders-page.component.html',
  styleUrl: './reminders-page.component.less',
  imports: [
    RemindersTableComponent,
    MatButtonModule,
    RouterModule,
    MatDividerModule,
  ],
})
export class RemindersPageComponent {}
