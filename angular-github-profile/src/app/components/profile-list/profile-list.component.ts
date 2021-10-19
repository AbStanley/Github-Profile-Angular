import { Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from 'src/app/interfaces/profile.interface';
import { RepoInterface } from 'src/app/interfaces/repo.interface';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileListComponent implements OnInit {
  @Input() profile!: ProfileInterface;
  @Input() repo_list!: RepoInterface[];

  stars: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.stars = this.repo_list!.map(
      (repo: { stargazers_count: number }) => repo.stargazers_count
    ).reduce((acc: number, value: number) => acc + value, 0);
  }
}
