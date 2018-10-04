import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../types/PostTypes';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }
  private findPosts() {
    this.postService.findAllPosts().subscribe((posts) => {
      console.log(posts)
    });
  }
  private addNew() {
    const post: Post = {
      "id": 4,
      "title": "Something more and more",
      "author": "SomeOne else also"
    }
    this.postService.savePost(post).subscribe((response) => {
      console.log(response);
    }, err => {console.log("YOU SCREWED UP!!!");
    })
  }
  ngOnInit() {
    this.findPosts();
  }
}
