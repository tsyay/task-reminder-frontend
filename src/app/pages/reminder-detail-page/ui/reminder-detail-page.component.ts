import { Component } from "@angular/core";
import { ReminderViewerComponent } from "../../../features/reminder/view-reminder/ui/reminder-viewer.component";

@Component({
    standalone: true,
      selector: 'app-reminder-detail-page',
      templateUrl: './reminder-detail-page.component.html',
      imports: [ReminderViewerComponent],
}) 
export class ReminderViewerPage {}