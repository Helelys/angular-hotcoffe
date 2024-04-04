import { Component, input } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() title:string = "Title"
  @Input() text:string = "Text"

  @Input() img:string = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"
}
