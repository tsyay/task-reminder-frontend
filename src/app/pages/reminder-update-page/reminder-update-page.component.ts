import { Component, OnInit } from '@angular/core';
import { ReminderApi } from '../../entities/reminder/api/reminder.api';
import { StatusApi } from '../../entities/status/api/status.api';
import { ActivatedRoute, Router } from '@angular/router';
import { ReminderFormComponent } from '../../features/reminder/form-reminder/ui/form-reminder.component';
import { CommonModule } from '@angular/common';
import { Status } from '../../entities/status/model/status.model';
import { ReminderFormValue } from '../../entities/reminder/model/reminder-form.model';
import { CreateReminderDto, UpdateReminderDto } from '../../entities/reminder/model/reminder.dto';
import { Reminder } from '../../entities/reminder/model/reminder.model';
import { mapReminderToForm } from '../../entities/reminder/lib/reminder-mappers';

@Component({
  selector: 'app-reminder-update-page',
  standalone: true,
  imports: [ReminderFormComponent, CommonModule],
  templateUrl: './reminder-update-page.component.html',
  styleUrl: './reminder-update-page.component.less',
})
export class ReminderUpdatePageComponent implements OnInit {
  isLoadingStatuses = false;
  isLoadingValues = false;
  isSaving = false;
  statuses: Status[] = [];
  reminder: ReminderFormValue | undefined;
  reminderId!: number;

  constructor(
    private readonly reminderApi: ReminderApi,
    private readonly statusesApi: StatusApi,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadStatuses();
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam === null || isNaN(Number(idParam))) {
      this.router.navigate(['/404']);
      return;
    }
    this.reminderId = Number(idParam);
    this.loadInitialValue();
  }

  loadStatuses(): void {
    this.isLoadingStatuses = true;
    this.statusesApi.getAll().subscribe({
      next: (data) => {
        this.statuses = data;
        this.isLoadingStatuses = false;
      },

      error: (err) => {
        this.isLoadingStatuses = false;
        console.error('Ошибка при загрузке статусов' + err.message);
      },
    });
  }

  loadInitialValue(): void {
    this.isLoadingValues = true;
    this.reminderApi.getById(this.reminderId).subscribe({
      next: (data) => {
        this.reminder = mapReminderToForm(data);
        this.isLoadingValues = false;
      },
      error: (err) => {
        console.log('Ошибка на уровне загрузки данных из бд' + err.message);
        this.isLoadingValues = false;
      },
    });
  }

  onSubmit(formValue: ReminderFormValue): void {
    this.isSaving = true;
    const dto: UpdateReminderDto = {
      shortDescription: formValue.shortDescription,
      fullDescription: formValue.fullDescription,
      dueAt: formValue.dueAt ? new Date(formValue.dueAt).toISOString() : null,
      statusId: Number(formValue.statusId),
    };

    this.reminderApi.update(this.reminderId, dto).subscribe({
      next: (updated) => {
        this.isSaving = false;
        console.log(updated.id);
        this.router.navigate(['/reminders', updated.id]);
      },
      error: (err) => {
        this.isSaving = false;
        console.error('Ошибка при создании напоминания' + err.message);
        console.error(err.message);
      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/reminders', this.reminderId]);
  }
}
