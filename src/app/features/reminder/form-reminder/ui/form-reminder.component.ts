import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Status } from '../../../../entities/status/model/status.model';
import { ReminderFormValue } from '../../../../entities/reminder/model/reminder-form.model';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './form-reminder.component.html',
  styleUrl: 'form-reminder.component.less',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
})
export class ReminderFormComponent {
  @Input() initialValue?: ReminderFormValue;
  @Input() statuses: Status[] = [];
  @Output() submitted = new EventEmitter<ReminderFormValue>();
  @Output() cancelled = new EventEmitter<void>();

  form: ReminderFormValue = {
    shortDescription: '',
    fullDescription: '',
    dueAt: '',
    statusId: 0,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialValue'] && this.initialValue) {
      this.form = { ...this.initialValue };
    }
  }
  onSubmit() {
    this.submitted.emit(this.form);
  }

  onCancel() {
    this.cancelled.emit();
  }
}
