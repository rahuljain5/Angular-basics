import { Component, OnInit } from '@angular/core';
import { PostFormModel } from '../formModel/post.forms.model'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  post = new PostFormModel(Math.random(), "Learn Angular", "Misko");
  submitted: boolean = false;

  constructor() {}

  ngOnInit() {}
  onSubmit() {
    this.submitted = true;
    this.post.id = Math.random();
    console.log(this.post);
    //add service call by passing post object for insert
    //this.postService.savePost(this.post).subscribe(res=>{
              // this.submitted = true
    //})
  }
}
