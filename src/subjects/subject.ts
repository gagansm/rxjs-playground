import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter, map, of, tap, debounceTime, catchError, EMPTY, concatMap, Subject } from "rxjs";
import { ajax } from "rxjs/ajax";

const emitInput: HTMLInputElement = (<HTMLInputElement>document.getElementById('emitInput'));
const emit = document.getElementById('emit');
const subscribe = document.getElementById('subscribe');

const subject$ = new Subject<string>();

// fromEvent(emit, 'click').subscribe(
//   () => subject$.next(emitInput.value)
// );

// another pattern

fromEvent(emit, 'click').pipe(
  map((event) => emitInput.value)
).subscribe(subject$);

fromEvent(subscribe, 'click').subscribe(
  () => {
    console.log('New sub added');
    subject$.subscribe((value) => console.log(value))
  }
)