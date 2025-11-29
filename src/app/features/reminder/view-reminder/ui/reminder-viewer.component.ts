import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Reminder } from '../../../../entities/reminder/model/reminder.model';
import { ReminderApi } from '../../../../entities/reminder/api/reminder.api';

@Component({
  standalone: true,
  selector: 'app-reminder-viewer',
  templateUrl: './reminder-viewer.component.html',
  imports: [CommonModule, RouterModule],
})
export class ReminderViewerComponent implements OnInit {
  isLoading = false;
  reminder: Reminder | null = null;
  reminderId!: number;

  constructor(
    private readonly reminderApi: ReminderApi,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam === null || isNaN(Number(idParam))) {
      this.router.navigate(['/404']);
      return;
    }
    this.reminderId = Number(idParam);
    this.loadReminder(this.reminderId);
  }

  loadReminder(id: number): void {
    this.reminderApi.getById(id).subscribe({
      next: (data) => {
        this.reminder = data;
      },
      error: (err) => {
        console.error('Ошибка при загрузке напоминания', err);
        this.isLoading = false;
        this.router.navigate(['/404']);
        return;
      },
    });
  }
}
