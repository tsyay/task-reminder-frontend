import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reminder } from '../model/reminder.model';
import { CreateReminderDto, UpdateReminderDto } from '../model/reminder.dto';
import { environment } from '../../../../environment/environments.development';

@Injectable({ providedIn: 'root' })
export class ReminderApi {
  private readonly baseUrl = `${environment.apiUrl}/reminders`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.baseUrl);
  }
  getById(id: number): Observable<Reminder> {
    return this.http.get<Reminder>(`${this.baseUrl}/${id}`);
  }

  create(payload: CreateReminderDto): Observable<Reminder> {
    return this.http.post<Reminder>(this.baseUrl, payload);
  }

  update(id: number, payload: UpdateReminderDto): Observable<Reminder> {
    return this.http.put<Reminder>(`${this.baseUrl}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
