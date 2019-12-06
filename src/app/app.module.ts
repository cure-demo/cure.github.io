import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./core/app-routing.module";
// import { RegisterComponent } from "./components/register/register.component";
// import { LoginPageComponent } from "./components/login-page/login-page.component";
// import { HomePageComponent } from "./components/home-page/home-page.component";
// import { ForgotDialogComponent } from "./components/forgot-dialog/forgot-dialog.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { FlexLayoutModule } from "@angular/flex-layout";
import { CustomMaterialModule } from "./core/material.module";
import { FormsModule } from "@angular/forms";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatSelectModule } from "@angular/material";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HttpClientModule } from "@angular/common/http";
import { MatCheckboxModule } from "@angular/material/checkbox";
// import { MenuService } from "./core/menu.service";
// import { LogoHeaderComponent } from "./components/template/logo-header/logo-header.component";
// import { AddProjectDialogComponent } from "./components/add-project-dialog/add-project-dialog.component";
// import { AddContactDialogComponent } from "./components/add-contact-dialog/add-contact-dialog.component";
// import { AddPhaseDialogComponent } from "./components/add-phase-dialog/add-phase-dialog.component";
import { GlobalService } from "./app.service";
// import { EditContactDialogComponent } from "./components/edit-contact-dialog/edit-contact-dialog.component";
// import { EditPhaseDialogComponent } from "./components/edit-phase-dialog/edit-phase-dialog.component";
// import { EditProjectDialogComponent } from "./components/edit-project-dialog/edit-project-dialog.component";
import { AppState } from "./app-state";
// import { IntroPageComponent } from "./components/intro-page/intro-page.component";
// import { PreferencesDialogComponent } from "./components/preferences-dialog/preferences-dialog.component";
import { DemoComponent } from "./components/demo/demo.component";
// import { DemoComponent } from './components/demo/demo.component';
@NgModule({
  declarations: [
    AppComponent,
    // LoginPageComponent,
    // RegisterComponent,
    // ForgotDialogComponent,
    // HomePageComponent,
    // LogoHeaderComponent,
    // AddProjectDialogComponent,
    // AddContactDialogComponent,
    // AddPhaseDialogComponent,
    // EditContactDialogComponent,
    // EditPhaseDialogComponent,
    // EditProjectDialogComponent,
    // IntroPageComponent,
    // PreferencesDialogComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    [FlexLayoutModule],
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    CustomMaterialModule,
    NgxMatSelectSearchModule,
    FormsModule,
    MatDialogModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatCheckboxModule
  ],
  entryComponents: [
    // ForgotDialogComponent,
    // AddProjectDialogComponent,
    // AddContactDialogComponent,
    // AddPhaseDialogComponent,
    // EditContactDialogComponent,
    // EditPhaseDialogComponent,
    // EditProjectDialogComponent,
    // PreferencesDialogComponent
  ],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule {}
