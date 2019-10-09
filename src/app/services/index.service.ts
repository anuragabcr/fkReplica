import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  url = 'http://fkreplica-env.8kbsbgaecu.us-east-2.elasticbeanstalk.com/';

  constructor(private http: HttpClient) { }

  getSlide() {
    return this.http.get(this.url);
  }
}
