import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../types/ProfileType';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-profile-detail-list',
  templateUrl: './profile-detail-list.component.html',
  styleUrls: ['./profile-detail-list.component.css']
})
export class ProfileDetailListComponent implements OnInit {
  profiles: Profile[];
  constructor(private profileService: ProfileService) {
    this.profileService.findProfiles()
      .then((response) => {
        this.profiles = response;
        console.log(this.profiles);
      });
  }
  selectedProfile: Profile = null;
  select(profile) {
    this.selectedProfile = profile;
  }
  ngOnInit() {
  }

}
