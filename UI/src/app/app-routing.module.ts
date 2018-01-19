import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LendComponent } from './lend/lend.component';

const routers: Routes = [
  { path: '', component: IndexComponent },
  { path: 'lend', component: LendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routers) ],
  exports: [RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
