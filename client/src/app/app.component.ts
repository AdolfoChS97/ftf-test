import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from './app.service'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

interface Params {
  [key: string]: string
}

interface Commits {
  sha: string,
  message: string,
  author: {
      name: string,
      email: string,
      date: string
  }
}

interface ApiCommistResponse {
  data: Commits[];
  meta: number;
  message: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, HttpClientModule],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public commits: Commits[] = []; 
  public isSeeking: boolean = false;
  public message: string = '';

  public githubForm: FormGroup = new FormGroup({
    owner: new FormControl('', Validators.required),
    repo: new FormControl('', Validators.required),
    page: new FormControl('', [Validators.pattern('^[0-9]+$'), Validators.min(1), Validators.max(100)]),
    perPage: new FormControl('', [Validators.pattern('^[0-9]+$')]),
    author: new FormControl(''),
    since: new FormControl(''),
    until: new FormControl(''),
  });

  constructor(private readonly appService: AppService) {}
  
  
  onSubmit() {
    if(this.githubForm.valid) {
      const { owner, repo, ...rest } = this.githubForm.getRawValue();
      const params: string = this.getUrlParams(rest);
      this.isSeeking = true;
      this.appService.getCommits(owner, repo, params).subscribe((observer) => {

        const { data, message } = observer as unknown as ApiCommistResponse;
        console.log(data, message);
        if(data.length > 0 && message === 'OK') {
          this.commits = data;
          this.isSeeking = false;
        }
      }, (e: HttpErrorResponse) => {
        this.commits = [];
        this.message = '';
        const { error: { message }, status } = e
        if(status === 404) this.message = `${message} repo`;
        if(status === 401) this.message = 'Bad credentials';
      })
    }
  }

  getUrlParams(params: Params): string {
    const urlParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      if(params[key]) urlParams.append(key, params[key]);
      if(key === 'perPage' && !params[key]) urlParams.append('perPage', '10');
      if(key === 'page' && !params[key]) urlParams.append('page', '1');

    });
    return urlParams ? `?${urlParams.toString()}`: '';
  }
}
