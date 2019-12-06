import { Injectable } from "@angular/core";
import { environment } from "../../src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class GlobalService {
  public base_url = environment.environmentUrl;
  public Login = this.base_url + "api/v1/login/";

  // Urls for Projects
  public projects = this.base_url + "api/v1/project";
  public projectsCreatedBy = this.base_url + "api/v1/project/?created_by=";

  // Urls for Phases
  public phases = this.base_url + "api/v1/phase";
  public phasesCreatedBy = this.base_url + "api/v1/phase/?created_by=";

  // Urls form Contacts
  public contacts = this.base_url + "api/v1/contact";
  public contactsCreatedBy = this.base_url + "api/v1/contact/?created_by=";
  public contactfiltersurl = this.base_url + "api/v1/contact/?";

  public user_subscription_url = this.base_url + "api/v1/customer_subscription";
  public create_user = this.base_url + "api/v1/user";

  constructor() {}
}
