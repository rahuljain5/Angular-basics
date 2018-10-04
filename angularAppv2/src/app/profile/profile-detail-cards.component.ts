import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../shared/profile.service';
import { Profile } from '../types/ProfileType';

@Component({
  selector: 'app-profile-detail-cards',
  templateUrl: './profile-detail-cards.component.html',
  styleUrls: ['./profile-detail-cards.component.css']
})
export class ProfileDetailCardsComponent implements OnInit {
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
