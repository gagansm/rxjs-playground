import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter, map, of, tap, debounceTime, catchError, EMPTY, concatMap } from "rxjs";
import { ajax } from "rxjs/ajax";

const source$ = new Observable(subscriber => {
  setTimeout(() => {
    subscriber.next('A');
  }, 2000);

  setTimeout(() => {
    subscriber.next('B');
  }, 5000);
});

source$.pipe(
  concatMap((value) => of(1, 2))
).subscribe(value => console.log(value));


// handling error in concatmap

const BASE_URL = 'https://random-data-api.com/api/v2/';

//users, banks, beers
// flattening operators do not pass complete notification from inner subs to the outer subs. This keeps the parent subs
// active forever

const endPoint: HTMLInputElement = (<HTMLInputElement>document.getElementById('endpoint'));
const fetch = document.getElementById('fetch');

fromEvent(fetch, "click")
  .pipe(
    map((event: any) => endPoint.value),
    filter((value:string) => value.length > 2),
    concatMap((value) =>
      ajax(`${BASE_URL}${value}`).pipe(
        map((ajaxResponse) => ajaxResponse.response),
        //catchError(err => EMPTY) // cancels only the ajax sub & rest of the parent sub will still work fine
      )
    ),
    catchError(err => EMPTY) //  this cancels the main sub when err occurs
  )
  .subscribe({
    next: (value: any) => {
      console.log(value);
    },
    complete: () => console.log("Completed"),
    error: (err) => console.error("Error"),
  });