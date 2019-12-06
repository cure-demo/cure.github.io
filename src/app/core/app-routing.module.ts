import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponent } from "../components/demo/demo.component";

const routes: Routes = [
  // { path: "", component: IntroPageComponent },
  // { path: "login", component: LoginPageComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "home", component: HomePageComponent }
  { path: "demo", component: DemoComponent },
  { path: "", component: DemoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
