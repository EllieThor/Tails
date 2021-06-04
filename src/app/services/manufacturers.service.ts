import { Injectable } from '@angular/core';
import { Manufacturer, Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ManufacturersService {
  manufacturers: Array<Manufacturer> = [];
  selectedProduct: Product = new Product();
  selectedManufacturer: number = 0;
  selectedProductsLine: Array<Product> = [];
  selectedPetType: number = 0;
  selectedDisplayMfr: number = -1;
  showForm: boolean = false;

  constructor() {}
  AddMfr = () => {
    this.manufacturers.push(new Manufacturer('Gosbi', 'Spain'));
    this.manufacturers.push(new Manufacturer('PetKind', 'Canada'));
    this.manufacturers.push(new Manufacturer('Sanabelle', 'Germany'));
    console.log('Manufacturers: ', this.manufacturers);
  };

  AddProdToMfr = () => {
    this.manufacturers[0].products.push(new Product('Life Croc', 300, 1));
    this.manufacturers[1].products.push(
      new Product('Tripe Dry – Green Lamb Tripe Formula', 350, 1)
    );
    this.manufacturers[2].products.push(
      new Product('Sanabelle Adult with Poultry', 250, 0)
    );
    console.log('Manufacturers: ', this.manufacturers);
  };

  AddProduct = () => {
    this.manufacturers[this.selectedManufacturer].products.push({
      ...this.selectedProduct,
    });
    // FIXME: not close form and not bring all products
    this.showForm = false;
    this.MfrClicked(-1);
    console.log('Manufacturers: ', this.manufacturers);
  };

  MfrClicked = (i: number) => {
    this.selectedDisplayMfr = i;
    this.selectedProductsLine = [];
    console.log('mfr clicked: ', i);

    if (i >= 0) this.selectedProductsLine = [...this.manufacturers[i].products];
    else
      this.manufacturers.map((mfr) => {
        this.selectedProductsLine.push(...mfr.products);
      });
    console.log('Manufacturers: ', this.selectedProductsLine);
  };
}
