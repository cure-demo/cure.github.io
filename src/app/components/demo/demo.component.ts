import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  demoForm: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.demoForm = this.formBuilder.group({
      input1: [],
      input2: [],
      input3: [],
      input4: [],
      input5: [],
      input6: [],
      input7: [],
      input8: [],
      input9: [],
      input10: [],
      input11: [],
      input12: []
    });
  }

  SubmitForm(formValues: {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
    input6: string;
    input7: string;
    input8: string;
    input9: string;
    input10: string;
    input11: string;
    input12: string;
  }) {
    console.log(formValues);
    if (formValues.input1 == null) {
    } else if (formValues.input2 == null) {
    } else if (formValues.input3 == null) {
    } else if (formValues.input4 == null) {
    } else if (formValues.input5 == null) {
    } else if (formValues.input6 == null) {
    } else if (formValues.input7 == null) {
    } else if (formValues.input8 == null) {
    } else if (formValues.input9 == null) {
    } else if (formValues.input10 == null) {
    } else if (formValues.input11 == null) {
    } else if (formValues.input12 == null) {
    } else {
      document.getElementById("showBlock").style.display = "block";
    }
  }
}
