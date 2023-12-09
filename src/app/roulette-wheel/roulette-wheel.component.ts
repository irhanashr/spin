import { Component, OnInit } from '@angular/core';
import { RouletteService } from '../roulette.service';

@Component({
  selector: 'app-roulette-wheel',
  templateUrl: './roulette-wheel.component.html',
  styleUrls: ['./roulette-wheel.component.css']
})
export class RouletteWheelComponent implements OnInit {
  spinning = false;
  result: number = 0;
  randomResult: number = 0;
  usedNumbers: number[] = [];

  spinWheel() {
    if (!this.spinning) {
      this.spinning = true;
      // Simulate server-side logic
      setTimeout(() => {
        this.randomResult = this.getRandomNumber();
        this.updateRandomResult();
      }, 500); // Simulating a 0.5-second random number animation
      setTimeout(() => {
        this.result = this.randomResult;
        this.spinning = false;
      }, 3000); // Simulating a 3-second server response time
    }
  }

  spinAgain() {
    if (!this.spinning) {
      this.result = 0;
      this.spinWheel();
    }
  }

  spin() {
    if (!this.spinning) {
      this.usedNumbers.push(this.result);
      console.log(this.usedNumbers);
      
      this.spinWheel();
    }
  }

  private getRandomNumber(): number {
    const allNumbers = Array.from({ length: 40 }, (_, i) => i + 1);
    const availableNumbers = allNumbers.filter(num => !this.usedNumbers.includes(num));
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    console.log("random number availeble",randomIndex);
    
    return availableNumbers[randomIndex];
  }

  private updateRandomResult() {
    // Simulate updating the random result during the animation
    const interval = setInterval(() => {
      this.randomResult = this.getRandomNumber();
    }, 100); // Update every 0.1 second during the animation

    // Stop updating when final result is achieved
    setTimeout(() => {
      clearInterval(interval);
    }, 2500); // Stop updating after 2.5 seconds
  }
  ngOnInit() {}
}
