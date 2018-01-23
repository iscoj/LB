import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LendComponent } from './lend/lend.component';
import { LendLendComponent } from './lend/lend/lend.component';
import { BorrowComponent } from './lend/borrow/borrow.component';

const routers: Routes = [
  { path: '', component: IndexComponent, data: { title: '首页' } },
  { path: 'lend', component: LendComponent, data: { title: '借还' } },
  {
    path: 'lend',  children: [
      { path: 'lend', component: LendLendComponent, data: { title: '借' } },
      { path: 'borrow', component: BorrowComponent, data: { title: '还' } }
    ], data: { title: '借还' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
