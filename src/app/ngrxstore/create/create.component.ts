import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import { Tutorial } from "../tutorial.model";
import { Store } from "@ngrx/store";
import * as TutorialActions from "./../actions/tutorial.actions";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addTutorial(name, url) {
    this.store.dispatch(
      new TutorialActions.AddTutorial({ name: name, url: url })
    );
  }
  ngOnInit() {}
}
