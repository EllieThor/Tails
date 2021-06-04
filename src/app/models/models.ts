export class Manufacturer {
  name: string = '';
  country: string = '';
  products: Array<Product> = [];
  // catLine: Array<Product> = [];
  // dogLine: Array<Product> = [];

  constructor(name?: string, country?: string) {
    this.name = name || '';
    this.country = country || '';
  }
}

export class Product {
  name: string = '';
  // staple: string = '';
  price: number = 0;
  petType: number = 0;
  //   quantity: number = 0;
  constructor(
    name?: string,
    // staple?: string,
    price?: number,
    petType?: number
    // quantity?: number
  ) {
    this.name = name || '';
    // this.staple = staple || '';
    this.price = price || 0;
    this.petType = petType || 0;
    // this.quantity = quantity || 0;
  }
}
