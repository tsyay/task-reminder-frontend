import { ReminderFormValue } from "../model/reminder-form.model";
import { Reminder } from "../model/reminder.model";

export function mapReminderToForm(form: Reminder): ReminderFormValue {
  return {
    shortDescription: form.shortDescription,
    fullDescription: form.fullDescription,
    dueAt: form.dueAt ? new Date(form.dueAt).toISOString() : null,
    statusId: form.status.id,
  };
}
