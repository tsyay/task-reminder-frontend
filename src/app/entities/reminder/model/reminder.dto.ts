export interface CreateReminderDto {
  shortDescription: string;
  fullDescription: string;
  dueAt?: string | null;
  statusId: number;
}

export interface UpdateReminderDto {
  shortDescription?: string;
  fullDescription?: string;
  dueAt?: string | null;
  statusId?: number;
}
