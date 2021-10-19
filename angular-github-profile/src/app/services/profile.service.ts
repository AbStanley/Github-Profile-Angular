import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProfileInterface } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _username: string = '';

  constructor(private http: HttpClient) {}

  getProfileInfo(name: string) {
    this._username = name;
    this._username.trim();
    return this.http
      .get<ProfileInterface>('https://api.github.com/users/' + this._username)
      .pipe(map((res) => res));
  }

  getProfileRepositories(username: string) {
    return this.http
      .get('https://api.github.com/users/' + username + '/repos')
      .pipe(map((res) => res));
  }
}
