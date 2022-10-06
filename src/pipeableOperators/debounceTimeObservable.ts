import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter, map, of, tap, debounceTime } from "rxjs";
import { ajax } from "rxjs/ajax";

const sliderInput = document.getElementById('slider');

fromEvent(sliderInput, 'input').pipe(
  debounceTime(2000),
  map((ev: any) => ev.target.value)
).subscribe(value => console.log(value));