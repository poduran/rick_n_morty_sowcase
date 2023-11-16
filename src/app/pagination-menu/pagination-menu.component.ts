import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-menu',
  templateUrl: './pagination-menu.component.html',
  styleUrls: ['./pagination-menu.component.css']
})
export class PaginationMenuComponent {

  @Input() hasPrev?: string;
  @Input() hasNext?: string;

  @Output() emmitedEvent = new EventEmitter<boolean>();

  emitEvent(nxt: boolean) {
    this.emmitedEvent.emit(nxt);
  }
}
