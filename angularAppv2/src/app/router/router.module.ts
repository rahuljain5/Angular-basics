import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { CustListComponent } from '../cust-list/cust-list.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileDetailsComponent } from '../profile/profile-details.component';
import { ProfileDetailListComponent } from '../profile/profile-detail-list.component';
import { ProfileDetailCardsComponent } from '../profile/profile-detail-cards.component';
import { PostComponent } from '../post/post.component';
import { ViewComponent } from '../post/view/view.component';
import { AddPostComponent } from '../post/add-post/add-post.component';
import { PostDetailListComponent } from '../post/view/post-detail-list/post-detail-list.component';
import { PostDetailCardsComponent } from '../post/view/post-detail-cards/post-detail-cards.component';
import { UpdateComponent } from '../post/update/update.component';
import { FormsComponent } from '../forms/forms.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'customers',
    component: CustListComponent
  },
  {
    path: 'forms',
    component:FormsComponent
  },
   {
    path: "profile",
    component: ProfileComponent,
    children: [
      {
        path: "",
        redirectTo: "listview",
        pathMatch: "full"
      },
      {
        path: "listview",
        component: ProfileDetailListComponent
      },
      {
        path: "cardview",
        component: ProfileDetailCardsComponent
      }
    ]
  },
  {
    path: 'detail/:id',
    component: ProfileDetailsComponent
  },
  {
    path: 'post',
    component: PostComponent,
    children: [
      {
        path: "view",
        component: ViewComponent,
        children: [
          {
            path: "",
            redirectTo: "listview",
            pathMatch: "full"
          },
          {
            path: "listview",
            component: PostDetailListComponent
          },
          {
            path: "cardview",
            component: PostDetailCardsComponent
          }
        ]
      },
      {
        path: "addPost",
        component: AddPostComponent
      },
      {
        path: "update/:id",
        component: UpdateComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule {

}
