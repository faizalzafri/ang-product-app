import { OnChanges, Component, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    // using onchanges to capture the changes made to property
    //onchanges watches changes to input properties
    ngOnChanges(): void {
        //starwidth is supposed to change on click
        this.starWidth = this.rating * 75 / 5;
    }
}