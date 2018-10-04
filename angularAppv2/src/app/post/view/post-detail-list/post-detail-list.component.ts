import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../../types/PostTypes';

@Component({
  selector: 'app-post-detail-list',
  templateUrl: './post-detail-list.component.html',
  styleUrls: ['./post-detail-list.component.css']
})
export class PostDetailListComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAll();
  }
  posts: Post[];
  private getAll(): void {
    this.postService.findAllPosts().subscribe((posts) => { this.posts = posts; });
  }
  private delete(id) {
    this.postService.deletePost(id).subscribe((res) => {
      console.log(res);
    });
  }
}
