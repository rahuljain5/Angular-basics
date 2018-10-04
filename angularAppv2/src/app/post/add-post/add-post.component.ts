import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/PostTypes';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService) { }
  private addPost() {
    // const post: Post = {
    //   "id": 4,
    //   "title": "Something more and more",
    //   "author": "SomeOne else also"
    // }
    this.postService.savePost(this.post).subscribe((response) => {
      console.log(response);
    }, err => {
      console.log("YOU SCREWED UP!!!");
    })
  }
  // title;
  post: Post = {
    id: parseInt((Math.random() * 100).toFixed(0)),
    title: "",
    author: "",
  };
  addTitle(e) {
    this.post.title = e.target.value;
    console.log(this.post.title);
  }
  addAuthor(e) {
    this.post.author = e.target.value;
    console.log(this.post);
  }
  ngOnInit() { }
}
