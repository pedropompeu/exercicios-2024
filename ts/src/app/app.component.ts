import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'DevChuva';
  show = false

  onToggleShow = () => {
    this.show = !this.show
  }
}
