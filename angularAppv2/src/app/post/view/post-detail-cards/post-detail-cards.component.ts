import { Component, OnInit } from '@angular/core';
import { Post } from '../../../types/PostTypes';
import { PostService } from '../../../shared/post.service';

@Component({
  selector: 'app-post-detail-cards',
  templateUrl: './post-detail-cards.component.html',
  styleUrls: ['./post-detail-cards.component.css']
})
export class PostDetailCardsComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAll();
  }
posts:Post[];
  private getAll(): void {
   this.postService.findAllPosts().subscribe((posts) => {this.posts = posts;} ); 
  }

}
