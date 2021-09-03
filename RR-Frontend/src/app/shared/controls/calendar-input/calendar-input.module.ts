import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';

import { CalendarInputComponent } from './calendar-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule],
  declarations: [CalendarInputComponent],
  exports: [CalendarInputComponent]
})
export class CalendarInputModule {}
