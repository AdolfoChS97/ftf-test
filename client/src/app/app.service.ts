import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  URL: string = 'http://localhost:3000/api/v1/github';

  constructor(private http: HttpClient) {}

  getCommits(owner: string, repo: string, urlParams: string) {
    return new Observable((observer) => {
      this.http.get(`${this.URL}/${owner}/${repo}/commits${urlParams}`).subscribe((data) => {
        observer.next(data);
      }, (e: HttpErrorResponse) => {
        observer.error(e)
      });
    });
  }
}
