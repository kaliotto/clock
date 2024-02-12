import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Time } from './time';
import { DigitComponent } from './components/digit/digit.component';
import { TickService } from './services/tick.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DigitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  time: Time = new Time();

  constructor(private tickService: TickService) { }

  ngOnInit(): void {
    this.tickService.time$.subscribe((time: Time) => {
      this.time = time;
    });
  }
}
