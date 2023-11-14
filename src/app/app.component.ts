import { Component } from '@angular/core';
import { GlobalService } from 'src/service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private svc: GlobalService) {}

  title = 'rick_n_morty_sowcase';
}
