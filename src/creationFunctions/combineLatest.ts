import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest } from "rxjs";
import { ajax } from "rxjs/ajax";

//combineLatest: emits the latest values from the combined input observables. Will get completed only when all the observables are complete. Till then last known value of the observable is emitted

const tempInput = document.getElementById('temperature-input');
const conversionDropdown = document.getElementById('conversion-dropdown');
const resultText = document.getElementById('result-text');

const observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}

const tempInput$ = fromEvent<InputEvent>(tempInput, 'input')

const conversionDropdown$ = fromEvent<InputEvent>(conversionDropdown, 'input')

combineLatest([tempInput$, conversionDropdown$]).subscribe({
  next: ([tempInput, conversionDropdown]) => {
    console.log(tempInput.target);
    console.log(conversionDropdown.target);
    // below value is from the course - was unable to read the value since TS was throwing some error
    //const temperature = Number(tempInput.target['value']);
    //const conversion = conversionDropdown.target['value'];

    // let result: number;
    // if (conversion === 'f-to-c') {
    //   result = (temperature - 32) * 5/9;
    // } else if (conversion === 'c-to-f') {
    //   result = temperature * 9/5 + 32;
    // }
  },
  complete: () => console.log('Completed'),
  error: err => console.log(err)
})

