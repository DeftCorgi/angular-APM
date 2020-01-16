import {Component, OnInit} from '@angular/core';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

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
    products: IProduct[];
    filteredProducts: IProduct[];
    _listFilter: string;

    constructor(private productService: ProductService) {}

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
    public ngOnInit():void { 
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    // Events ============================

    public onRatingClicked(message: string):void {
        this.pageTitle = message;
    }
}