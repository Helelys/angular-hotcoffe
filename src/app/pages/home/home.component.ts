import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HeroComponent } from "../../components/hero/hero.component";
import { ContentComponent } from "../../components/content/content.component";
import { FooterHeaderComponent } from "../../components/footer-header/footer-header.component";
import { FooterContentComponent } from "../../components/footer-content/footer-content.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, HeroComponent, ContentComponent, FooterHeaderComponent, FooterContentComponent]
})
export class HomeComponent {

}
