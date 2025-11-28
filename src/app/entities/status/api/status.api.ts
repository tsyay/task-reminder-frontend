import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../model/status.model';
import { environment } from '../../../../environment/environments.development';

@Injectable({ providedIn: 'root' })
export class StatusApi {
  private readonly baseUrl = `${environment.apiUrl}/statuses`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Status[]> {
    return this.http.get<Status[]>(this.baseUrl);
  }
}
