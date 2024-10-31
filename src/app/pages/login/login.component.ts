import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BtnComponent } from "../../components/btn/btn.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    BtnComponent
],
  templateUrl: './login.component.html'
})
export class LoginComponent {
}
