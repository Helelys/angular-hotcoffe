import { Component } from '@angular/core';
import { CardsComponent } from "../cards/cards.component";

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [CardsComponent]
})
export class ContentComponent {

}
