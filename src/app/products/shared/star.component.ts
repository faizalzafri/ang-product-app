import { OnChanges, Component } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    rating: number = 4;
    starWidth: number;

    // using onchanges to capture the changes made to property
    ngOnChanges(): void {
        //starwidth is supposed to change on click
        this.starWidth = this.rating * 75 / 5;
    }
}