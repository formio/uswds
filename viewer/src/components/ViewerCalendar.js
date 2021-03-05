import { Widgets } from 'formiojs';

const CalendarWidget = Widgets.widgets.calendar;

export class ViewerCalendar extends CalendarWidget {
  constructor(settings, component) {
    super(settings, component);
    this.originalDisplayInTimezone = this.settings.displayInTimezone;
  }

  get timezone() {
    // Ensure the displayInTimezone is never viewer since the server "views" the submission...
    if (!this.originalDisplayInTimezone || this.originalDisplayInTimezone === 'viewer') {
      this.settings.displayInTimezone = this.settings.submissionTimezone ? 'submission' : 'utc';
    }
    return super.timezone;
  }
}

Widgets.addWidget('viewercalendar', ViewerCalendar);
