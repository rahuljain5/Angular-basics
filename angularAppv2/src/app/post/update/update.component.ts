import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../shared/post.service';
import { Post } from '../../types/PostTypes';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private id;
  post: Post;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postService.findPostById(this.id).subscribe((post) => this.post = post);
  }

  updatePost() {
    this.postService.updatePost(this.post).subscribe((res) => console.log(res));
  }
}
