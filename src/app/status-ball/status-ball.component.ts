import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-ball',
  templateUrl: './status-ball.component.html',
  styleUrls: ['./status-ball.component.css']
})
export class StatusBallComponent {
@Input() status?: string;



getStatusColor(): string {
  switch (this.status) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'red';
    default:
      return 'gray';
  }
}
}
