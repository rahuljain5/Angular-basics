import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './router/router.module';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustListComponent } from './cust-list/cust-list.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './shared/profile.service';
import { ProfileDetailsComponent } from './profile/profile-details.component';
import { ProfileDetailCardsComponent } from './profile/profile-detail-cards.component';
import { ProfileDetailListComponent } from './profile/profile-detail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './shared/post.service';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './post/view/view.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { PostDetailListComponent } from './post/view/post-detail-list/post-detail-list.component';
import { PostDetailCardsComponent } from './post/view/post-detail-cards/post-detail-cards.component';
import { DeletePostComponent } from './post/delete-post/delete-post.component';
import { UpdateComponent } from './post/update/update.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {   MatCheckboxModule, MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    CustListComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    ProfileDetailCardsComponent,
    ProfileDetailListComponent,
    PostComponent,
    ViewComponent,
    AddPostComponent,
    PostDetailListComponent,
    PostDetailCardsComponent,
    DeletePostComponent,
    UpdateComponent,
    FormsComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ProfileService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
