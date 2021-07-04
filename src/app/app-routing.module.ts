import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { LeftMenuComponent } from './pages/left-menu/left-menu.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
  {
    path: "",
    component: LeftMenuComponent,
    children: [
      { path: "test", component: TestComponent },

    ],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
