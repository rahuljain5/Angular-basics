import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../types/ProfileType';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profile: Profile;
  constructor(private router: ActivatedRoute, private profileService: ProfileService, private location: Location) { }
  
  findProfileById(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.profileService.findProfileById(id)
    .then((response) => {
        console.log(response);
        this.profile = response;
      })
      .catch(err => console.log(err));
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.findProfileById();
  }

}
