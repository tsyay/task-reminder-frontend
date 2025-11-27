import { Status } from "../../status/model/status.model";

export interface Reminder {
  id: number;
  shortDescription: string;
  fullDescription: string;
  createdAt: string;
  dueAt: string | null;
  status: Status;
}
