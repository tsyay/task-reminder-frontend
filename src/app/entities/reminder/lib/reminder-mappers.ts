import { ReminderFormValue } from '../model/reminder-form.model';
import { Reminder } from '../model/reminder.model';

function toInputDateTimeLocal(value: string | null | undefined): string | null {
  if (!value) return null;

  const date = new Date(value);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function mapReminderToForm(reminder: Reminder): ReminderFormValue {
  return {
    shortDescription: reminder.shortDescription,
    fullDescription: reminder.fullDescription,
    statusId: reminder.status.id,
    createdAt: toInputDateTimeLocal(reminder.createdAt) ?? '',
    dueAt: toInputDateTimeLocal(reminder.dueAt),
  };
}
