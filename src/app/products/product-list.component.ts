import {Component, OnInit} from '@angular/core';
import { IProduct } from './IProduct';

const products: IProduct[] = [{
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2019",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png",

  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2019",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "assets/images/hammer.png"
  }]

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    pageTitle: string = 'Product List';
    products: IProduct[] = products
    filteredProducts: IProduct[] = []
    _listFilter: string;

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    get listFilter():string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
    }

    private performFilter = (filter: string): IProduct[] =>{
        filter = filter.toLocaleLowerCase();
        return this.products.filter((p) => p.productName.toLowerCase().includes(filter))
    }

    public toggleImage():void { this.showImage = !this.showImage }
    public ngOnInit():void { console.log('in OnInit.') }
}