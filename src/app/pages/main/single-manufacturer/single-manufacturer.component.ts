import { Component, Input, OnInit } from '@angular/core';
import { Manufacturer, Product } from 'src/app/models/models';

@Component({
  selector: 'app-single-manufacturer',
  templateUrl: './single-manufacturer.component.html',
  styleUrls: ['./single-manufacturer.component.css'],
})
export class SingleManufacturerComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor() {}

  ngOnInit(): void {}
}
