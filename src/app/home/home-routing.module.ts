import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'member',
        pathMatch: 'full',
      },
      {
        path: 'member',
        loadChildren: () =>
          import('./member/member.module').then((m) => m.MemberPageModule),
      },
      {
        path: 'group',
        loadChildren: () =>
          import('./group/group.module').then((m) => m.GroupPageModule),
      },
      {
        path: 'group-create',
        loadChildren: () =>
          import('./group-create/group-create.module').then(
            (m) => m.GroupCreatePageModule
          ),
      },
      {
        path: 'group-item/:id',
        loadChildren: () =>
          import('./group-item/group-item.module').then(
            (m) => m.GroupItemPageModule
          ),
      },
      {
        path: 'group-setting/:id',
        loadChildren: () =>
          import('./group-setting/group-setting.module').then(
            (m) => m.GroupSettingPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
