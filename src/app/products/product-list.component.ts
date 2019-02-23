import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    //providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 40;
    imageMargin: number = 2;
    showImage: boolean = false;

    private _productService;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    //any is for cases where data type is not specified
    filteredProducts: IProduct[];
    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Inside OnInit');
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }

    constructor(private productService: ProductService) {
        console.log('Inside Constructor');
        this._productService = productService;
    }

    performFilter(filterBy: string): IProduct[] {
        //case insesitve comparison
        filterBy = filterBy.toLocaleLowerCase();

        //if filerBy string is not in product name
        //indexof return -1 and condition becomes false and no
        //product object is rturned
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(value: string): void {
        console.log(value);
    }
}