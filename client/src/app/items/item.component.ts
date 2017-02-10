import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
  item: any;
  url: string;

  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) {
    this.url = this.activatedRoute.snapshot.url[0] + "/" + this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.webService.getReq(this.url).subscribe(
      response => {
         this.item = response.json()[0];
      },
      error => console.error(error)
    );
  }
}
