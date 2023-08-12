import { Action } from "redux";
import Task from "./task";
import { Product } from "./product";

export interface TaskPayload extends Task {}

export interface TaskAction extends Action {
  payload: TaskPayload;
}

export interface ProductPayload extends Product {}

export interface ProductAction extends Action {
  FETCH_PRODUCTS: any;
  payload: ProductPayload;
}
