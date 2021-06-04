import { Component, Input, OnInit } from '@angular/core';
import { Manufacturer, Product } from 'src/app/models/models';
import { ManufacturersService } from 'src/app/services/manufacturers.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() manufacturer: Manufacturer = new Manufacturer();

  constructor() {}

  ngOnInit(): void {}
}
