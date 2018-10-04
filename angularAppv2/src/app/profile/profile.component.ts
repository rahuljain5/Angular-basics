import { Component, OnInit, ElementRef } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../types/ProfileType';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  // selectedProfile = false;
  // select() {
  //   this.selectedProfile = !this.selectedProfile;
  // }
  // view: string = "list";
  // updateView(view: string) {
  //   console.log(view);
    
  //   this.view = view;
  // }

  ngOnInit() {
  }

}
