import { Injectable } from "@angular/core";
import { PROFILES } from '../mockData/profile-mock'
import { Profile } from "../types/ProfileType";

@Injectable()
export class ProfileService {
    constructor() { }
    // findProfiles(): Array<Profile> {
    //     return PROFILES;
    // }

    findProfiles(): Promise<Profile[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(PROFILES);
            }, 1000);
        })
    }

    profile: Profile
    
    findProfileById(id: number): Promise<Profile> {
        return new Promise((resolve, reject) => {
            this.profile = PROFILES.find(profile => profile.id === id);
            if (this.profile)
                resolve(this.profile);
            else reject("Could not find the profile")
        })
    }
}