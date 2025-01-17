import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4-conter-app';
}
