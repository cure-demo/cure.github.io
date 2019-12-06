import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./shared/models/user.model";

@Injectable()
export class AppState {
  isLoggedIn: boolean;
  user: User;
  isSpinnerVisible: boolean;
  spinnerVisible$: Observable<boolean>;

  constructor() {
    this.isSpinnerVisible = false;
    this.spinnerVisible$ = new Observable<boolean>(observer => {
      let currentVisibility = this.isSpinnerVisible;

      setInterval(() => {
        if (currentVisibility !== this.isSpinnerVisible) {
          observer.next(this.isSpinnerVisible);
          currentVisibility = this.isSpinnerVisible;
        }
      }, 500);
    });
  }
}
