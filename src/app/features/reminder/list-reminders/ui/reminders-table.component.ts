import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Reminder } from '../../../../entities/reminder/model/reminder.model';
import { ReminderApi } from '../../../../entities/reminder/api/reminder.api';
import { MatTableModule } from '@angular/material/table';

@Component({ 
  standalone: true,
  selector: 'app-reminders-table',
  templateUrl: './reminders-table.component.html',
  styleUrl: './reminders-table.component.less',
  imports: [CommonModule, RouterModule, MatTableModule],
})
export class RemindersTableComponent implements OnInit {
  reminders: Reminder[] = [];
  isLoading = false;

  constructor(
    private readonly reminderApi: ReminderApi,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders(): void {
    this.isLoading = true;
    this.reminderApi.getAll().subscribe({
      next: (data) => {
        this.reminders = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Ошибка на подгрузке данных в таблице напоминаний:', err);
        console.error('status:', err.status);
        console.error('message:', err.message);
        console.error('error body:', err.error);
        this.isLoading = false;
      },
    });
  }

  onRowDblClick(reminder: Reminder): void {
    this.router.navigate(['/reminders', reminder.id]);
  }

  displayedColumns: string[] = ['status', 'shortDescription', 'createdAt', 'dueAt'];
}
