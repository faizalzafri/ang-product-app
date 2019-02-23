import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    imageWidth: number = 40;
    imageMargin: number = 2;
    showImage: boolean = false;

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
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Inside OnInit');
    }

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
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