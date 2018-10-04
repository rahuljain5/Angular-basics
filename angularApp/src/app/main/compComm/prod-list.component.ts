import { Component, OnInit } from "@angular/core";
import { Product } from "../../types/CustomerType";

@Component({
  selector: "app-prod-list",
  templateUrl: "./prod-list.component.html",
  styleUrls: ["./prod-list.component.css"]
})
export class ProdListComponent implements OnInit {
  products: Array<Product> = [
    {
      id: 12,
      name: 'A'
    }
  ];

  addToList(prod) {
    console.log(prod);

    this.products.push(prod);
  }
  constructor() {}

  ngOnInit() {}
}
