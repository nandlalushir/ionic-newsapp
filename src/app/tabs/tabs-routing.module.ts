import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () => import('../contact/contact.module').then( m => m.ContactPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
