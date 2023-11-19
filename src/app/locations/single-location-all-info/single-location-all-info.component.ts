import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/models/location-info';
import { GlobalService } from 'src/service/global.service';

@Component({
  selector: 'app-single-location-all-info',
  templateUrl: './single-location-all-info.component.html',
  styleUrls: ['./single-location-all-info.component.css']
})
export class SingleLocationAllInfoComponent {
  id: number | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      this.svc.getSingleLocation(param.get('id')!)
        .subscribe((data: Result) => {
          this.info = data;
        })
    });
  }

  private svc = inject(GlobalService);

  info: Result | undefined;
}
