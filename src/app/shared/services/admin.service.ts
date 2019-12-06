import { Injectable } from "@angular/core";
// import { HttpClient } from 'selenium-webdriver/http';
import { GlobalService } from "../../app.service";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { User } from "src/app/models/user.model";
import { User } from "../models/user.model";
import { AppState } from "src/app/app-state";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  token: any;
  constructor(
    private globalService: GlobalService,
    private http: HttpClient,
    public state: AppState
  ) {
    if (JSON.parse(localStorage.getItem("user"))) {
      this.token = JSON.parse(localStorage.getItem("user")).key;
    }
    // this.getUserToken();
    // console.log(JSON.parse(localStorage.getItem("user")));
    // this.token = 346;
  }

  getUserToken() {
    let localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      this.state.isLoggedIn = JSON.parse(
        localStorage.getItem("user")
      ).isLoggedIn;
      this.state.user = JSON.parse(localStorage.getItem("user"));
      this.token = this.state.user.key;
      return this.state.user.key;
    } else {
      this.state.isLoggedIn = false;
      this.state.user = null;
      return "";
    }

    // let localUser = JSON.parse(localStorage.getItem("user"));
    // if (localUser) {
    //   return localUser.key;
    // }
  }
  login(username: string, password: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    const payload = {
      email: username,
      password: password
    };
    return this.http
      .post<User>(this.globalService.Login, payload, httpOptions)
      .pipe();
  }

  getProjects(userid: any): Observable<User> {
    this.getUserToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.projectsCreatedBy + userid, httpOptions)
      .pipe();
  }

  getContacts(userid: any): Observable<User> {
    this.getUserToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.contactsCreatedBy + userid, httpOptions)
      .pipe();
  }

  getPhases(userid: any): Observable<User> {
    this.getUserToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.phasesCreatedBy + userid, httpOptions)
      .pipe();
  }
  addProject(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };

    return this.http.post<User>(
      this.globalService.projects + "/",
      payload,
      httpOptions
    );
  }
  addContact(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };

    return this.http.post<User>(
      this.globalService.contacts + "/",
      payload,
      httpOptions
    );
  }
  addPhase(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };

    return this.http.post<User>(
      this.globalService.phases + "/",
      payload,
      httpOptions
    );
  }

  projectfilter(
    status,
    creation_date,
    members: any,
    project_name
  ): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    console.log(members);
    return this.http
      .get<User>(
        this.globalService.projectsCreatedBy +
          "&status=" +
          status +
          "&creation_date=" +
          creation_date +
          "&members=" +
          members +
          "&project_name=" +
          project_name,
        httpOptions
      )
      .pipe();
  }
  phasefilter(
    status,
    creation_date,
    members: any,
    phases_name
  ): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    console.log(members);
    return this.http
      .get<User>(
        this.globalService.phasesCreatedBy +
          "&status=" +
          status +
          "&creation_date=" +
          creation_date +
          "&members=" +
          members +
          "&phases_name=" +
          phases_name,
        httpOptions
      )
      .pipe();
  }

  contactfilter(
    name: any,
    notes: any,
    projects,
    phases,
    lastRemainder,
    lastContact,
    email
  ): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(
        this.globalService.contactfiltersurl +
          "created_by=&first_name=" +
          name +
          "&notes=" +
          notes +
          "&project=" +
          projects +
          "&phase=" +
          phases,
        httpOptions
      )
      .pipe();
  }

  getContactsById(contactid: any): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.contacts + "/" + contactid, httpOptions)
      .pipe();
  }
  getPhaseById(phaseid: any): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.phases + "/" + phaseid, httpOptions)
      .pipe();
  }
  getProjectById(projectid: any): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.projects + "/" + projectid, httpOptions)
      .pipe();
  }
  updateContact(contactId, payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .patch<User>(
        this.globalService.contacts + "/" + contactId + "/",
        payload,
        httpOptions
      )
      .pipe();
  }

  updatePhase(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .patch<User>(
        this.globalService.phases + "/" + payload.id + "/",
        payload,
        httpOptions
      )
      .pipe();
  }

  updateProject(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .patch<User>(
        this.globalService.projects + "/" + payload.id + "/",
        payload,
        httpOptions
      )
      .pipe();
  }
  getAllProjects(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.projects + "/", httpOptions)
      .pipe();
  }
  getAllPhases(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .get<User>(this.globalService.phases + "/", httpOptions)
      .pipe();
  }
  deleteContact(id): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .delete<User>(this.globalService.contacts + "/" + id + "/", httpOptions)
      .pipe();
  }
  deleteProject(id): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .delete<User>(this.globalService.projects + "/" + id + "/", httpOptions)
      .pipe();
  }
  deletePhase(id): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    return this.http
      .delete<User>(this.globalService.phases + "/" + id + "/", httpOptions)
      .pipe();
  }

  // createUser(payload: any): Observable<User> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ "Content-Type": "application/json" })
  //   };
  //   // const payload = {
  //   //   email: username,
  //   //   password: password
  //   // };
  //   return this.http
  //     .post<User>(
  //       this.globalService.user_subscription_url + "/",
  //       payload,
  //       httpOptions
  //     )
  //     .pipe();
  // }
  createUser(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        // Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };

    return this.http.post<User>(
      this.globalService.create_user + "/",
      payload,
      httpOptions
    );
  }
  createSubscription(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        // Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };

    return this.http.post<User>(
      this.globalService.user_subscription_url + "/",
      payload,
      httpOptions
    );
  }
  updateSubscription(payload): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        // Authorization: "Token " + this.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };

    return this.http.patch<User>(
      this.globalService.user_subscription_url + "/" + payload.id + "/",
      payload,
      httpOptions
    );
  }
}
