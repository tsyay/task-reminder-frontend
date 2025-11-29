import { Component, OnInit } from '@angular/core';
import { ReminderFormComponent } from '../../features/reminder/form-reminder/ui/form-reminder.component';
import { ReminderApi } from '../../entities/reminder/api/reminder.api';
import { Status } from '../../entities/status/model/status.model';
import { Router } from '@angular/router';
import { StatusApi } from '../../entities/status/api/status.api';
import { CreateReminderDto } from '../../entities/reminder/model/reminder.dto';
import { ReminderFormValue } from '../../entities/reminder/model/reminder-form.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder-create-page',
  standalone: true,
  imports: [ReminderFormComponent, CommonModule],
  templateUrl: './reminder-create-page.component.html',
  styleUrl: './reminder-create-page.component.less',
})
export class ReminderCreatePageComponent implements OnInit {
  isSaving = false;
  isLoadingStatuses = false;
  statuses: Status[] = [];
  constructor(
    private readonly reminderApi: ReminderApi,
    private readonly statusesApi: StatusApi,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.loadStatuses();
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

  onSubmit(formValue: ReminderFormValue): void {
    this.isSaving = true;
    const dto: CreateReminderDto = {
      shortDescription: formValue.shortDescription,
      fullDescription: formValue.fullDescription,
      dueAt: formValue.dueAt ? new Date(formValue.dueAt).toISOString() : null,
      statusId: Number(formValue.statusId),
    };

    this.reminderApi.create(dto).subscribe({
      next: (created) => {
        this.isSaving = false;
        console.log(created.id)
        this.router.navigate(['/reminders']);
      },
      error: (err) => {
        this.isSaving = false;
        console.error('Ошибка при создании напоминания' + err.message);
        console.error(err.message);

      },
    });
  }

  onCancel(): void {
    this.router.navigate(['/reminders']);
  }
}
