import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h3>Checked In Passengers: {{ checkedInCount() }} / {{ items?.length }}</h3>
    </div>
  `
})

export class PassengerCountComponent {
  @Input()
  items: Passenger[];
  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
  }
}