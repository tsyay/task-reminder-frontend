export interface ReminderFormValue {
  shortDescription: string;
  fullDescription: string;
  dueAt: string | null;
  createdAt: string | null;
  statusId: number;
}