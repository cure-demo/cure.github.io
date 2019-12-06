import { Component, isDevMode } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router, NavigationEnd } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "PITCHPACER";
  app_env: string = environment.app_env;
  environmentName: "DEV";
  environmentUrl = "Debug api";
  showLoader: boolean;
  constructor(private router: Router) {
    this.environmentUrl = environment.environmentUrl;

    //const storedState = localStorage.getItem("state");

    // if (storedState) {
    //   const sessionState: AppState = JSON.parse(storedState);
    //   this.state.isLoggedIn = sessionState.isLoggedIn;
    //   this.state.user = sessionState.user;
    //   this.state.title = sessionState.title;
    // }
  }

  ngOnInit() {
    // this.loaderService.status.subscribe((val: boolean) => {
    //   this.showLoader = val;
    // });
    if (isDevMode()) {
      console.log("dev Development!");
    } else {
      console.log("qa Production!");
    }
    console.log("Current environment ****************", this.app_env);
    this.router.onSameUrlNavigation = "reload";
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
