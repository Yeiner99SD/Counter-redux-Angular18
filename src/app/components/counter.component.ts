import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
   
  title: string = 'Contador usando redux'
  counter: number = 0

  increment(){
    this.counter++
    console.log('incrementando...')
  }
   
  decrement(){
    this.counter--
    console.log('decrementando...')
  }

  reset(){
    this.counter = 0
    console.log('reset counter')
  }
}
