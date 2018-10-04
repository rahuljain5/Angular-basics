import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Product } from "../../types/CustomerType";

@Component({
  selector: "app-prod-add",
  templateUrl: "./prod-add.component.html",
  styleUrls: ["./prod-add.component.css"]
})
export class ProdAddComponent implements OnInit {
  product: Product = {
    id: 111,
    name: 'XYZ'
  };

  @Output()
  addProduct = new EventEmitter<Product>();

  Add() {
    this.addProduct.emit(this.product);
  }
  constructor() {}

  ngOnInit() {}
}
