import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Tutorial } from "../tutorial.model";

export const ADD_TUTORIAL = "[Tutorial] Add";
export const REMOVE_TUTORIAL = "[Tutorial] Remove";

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}
export type Actions = AddTutorial | RemoveTutorial;
