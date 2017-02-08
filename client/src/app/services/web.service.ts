import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class WebService {

  host: string = "http://localhost:4201/";
  constructor(public http: Http) { }

  getReq(url: string) {
    return this.http.get(this.host + url);
  }

}
