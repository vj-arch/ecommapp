import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Tutorial } from "../tutorial.model";
import { AppState } from "./../app.state";
import * as TutorialActions from "./../actions/tutorial.actions";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  tutorial$: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    this.tutorial$ = store.select("tutorial");
  }
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
  ngOnInit() {}
}
