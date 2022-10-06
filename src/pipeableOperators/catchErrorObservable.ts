import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter, map, of, tap, debounceTime, catchError, EMPTY } from "rxjs";
import { ajax } from "rxjs/ajax";

const reject = new Promise((resolve, reject) =>
  setTimeout(() => {
    reject("Error");
  }, 3000)
);

const resolve = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Success");
  }, 3000)
);

from(reject).pipe(
  catchError(error => EMPTY) // catchError(error => from(resolve))
).subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completed')
});