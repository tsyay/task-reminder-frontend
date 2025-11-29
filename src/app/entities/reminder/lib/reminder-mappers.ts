import { ReminderFormValue } from '../model/reminder-form.model';
import { Reminder } from '../model/reminder.model';

export function mapReminderToForm(form: Reminder): ReminderFormValue {
  return {
    shortDescription: form.shortDescription,
    fullDescription: form.fullDescription,
    dueAt: form.dueAt ? new Date(form.dueAt).toISOString() : null,
    createdAt: form.createdAt ? new Date(form.createdAt).toISOString() : null,
    statusId: form.status.id,
  };
}
