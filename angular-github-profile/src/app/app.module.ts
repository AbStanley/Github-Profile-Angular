import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProfileSearchComponent } from './components/profile-search/profile-search.component';
import { ProfileService } from './services/profile.service';
import { ProfileListComponent } from './components/profile-list/profile-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSearchComponent,
    ProfileListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
