import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-view-detail',
  templateUrl: './product-view-detail.component.html',
  styleUrls: ['./product-view-detail.component.css']
})
export class ProductViewDetailComponent implements OnInit {
  @Input()
  product;
  constructor() { }

  ngOnInit() {
  }

}
