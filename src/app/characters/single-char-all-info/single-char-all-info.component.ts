import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/models/character-info';
import { GlobalService } from 'src/service/global.service';

@Component({
  selector: 'app-single-char-all-info',
  templateUrl: './single-char-all-info.component.html',
  styleUrls: ['./single-char-all-info.component.css']
})
export class SingleCharAllInfoComponent {
  id: number | undefined;

  constructor(private route: ActivatedRoute ) {
    this.route.paramMap.subscribe(param => {
      this.svc.getSingleCharacter(param.get('id')!)
      .subscribe((dados : Result) => {
        this.info = dados;
      });
    });
  }

  private svc = inject(GlobalService);

  info: Result | undefined;
}
