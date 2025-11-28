import { ReminderFormValue } from "../model/reminder-form.model";
import { CreateReminderDto, UpdateReminderDto } from "../model/reminder.dto";

export function mapFormToCreateDto(form: ReminderFormValue): CreateReminderDto {
  return {
    shortDescription: form.shortDescription,
    fullDescription: form.fullDescription,
    dueAt: form.dueAt ? new Date(form.dueAt).toISOString() : null,
    statusId: form.statusId,
  };
}

export function mapFormToUpdateDto(form: ReminderFormValue): UpdateReminderDto {
  return {
    shortDescription: form.shortDescription,
    fullDescription: form.fullDescription,
    dueAt: form.dueAt ? new Date(form.dueAt).toISOString() : null,
    statusId: form.statusId,
  };
}