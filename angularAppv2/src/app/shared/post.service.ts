import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../types/PostTypes'
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  httpOptions = { headers: new HttpHeaders({ "content-type": "application/json" }) }
  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/posts/";
  findAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  post: Post;
  posts: Array<Post> = [];
  findPostById(id): any {
    return this.http.get<Post>(this.url + id)

  }

  savePost(post: Post) {
    return this.http.post<Post>(this.url, post, this.httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.url}/${post.id}`;
    return this.http.put<Post>(url, post, this.httpOptions);
  }
  deletePost(id: number) {
    return this.http.delete<Post>(this.url + id);
  }

}
