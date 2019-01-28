import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './core/api.service';
import { Post } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.apiService.getPosts();
  }
}
