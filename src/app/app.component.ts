import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './core/api.service';
import { Post } from './models';
import { TableSettings } from './shared/components/table/table.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  posts$: Observable<Post[]>;
  settings: TableSettings = {
    labels: {
      userId: 'User ID',
      id: 'ID',
      title: 'Title',
      body: 'Body'
    },
    sort: {
      field: 'title',
      dir: 'desc'
    }
  };

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.posts$ = this.apiService.getPosts();
  }
}
