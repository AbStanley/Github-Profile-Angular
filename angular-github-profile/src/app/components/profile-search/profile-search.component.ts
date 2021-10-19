import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ProfileInterface } from 'src/app/interfaces/profile.interface';
import { RepoInterface } from 'src/app/interfaces/repo.interface';
import { ProfileService } from '../../services/profile.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.scss'],
})
export class ProfileSearchComponent implements OnInit {
  profile!: ProfileInterface;
  repos!: RepoInterface[];
  loading: boolean = false;

  constructor(
    private ProfileSearch: ProfileService,
    private LoaderService: LoaderService
  ) {}

  show() {
    this.LoaderService.show();
  }

  hide() {
    this.LoaderService.hide();
  }

  ngOnInit(): void {
    this.LoaderService.loaderState.subscribe((state: { show: boolean }) => {
      this.loading = state.show;
    });
  }

  getUserInfo(username: string) {
    username.trim();
    this.ProfileSearch.getProfileInfo(username)
      .pipe(
        switchMap((username) => {
          this.profile = username;
          return this.ProfileSearch.getProfileRepositories(this.profile.login);
        })
      )
      .subscribe((repos) => {
        this.repos = repos;
        this.hide();
      });
  }
}
