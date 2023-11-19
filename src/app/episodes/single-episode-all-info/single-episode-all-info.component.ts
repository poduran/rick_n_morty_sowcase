import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/service/global.service';
import { Result } from 'src/models/episode-info';

@Component({
  selector: 'app-single-episode-all-info',
  templateUrl: './single-episode-all-info.component.html',
  styleUrls: ['./single-episode-all-info.component.css']
})
export class SingleEpisodeAllInfoComponent {
  id: number | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      this.svc.getSingleEpisode(param.get('id')!)
        .subscribe((data: Result) => {
          this.info = data;
        })
    });
  }

  private svc = inject(GlobalService);

  info: Result | undefined;
}
