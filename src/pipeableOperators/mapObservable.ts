import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter, map } from "rxjs";
import { ajax } from "rxjs/ajax";

const numbers$ = interval(1000);

const multiplied$ = numbers$.pipe(map(item => item * 2));

//const subs = multiplied$.subscribe(value => console.log(value));

setTimeout(() => {
  //subs.unsubscribe();
}, 15000);


// another example

const observableA$ = ajax('https://random-data-api.com/api/v2/users').pipe(map((res: any) => res.response.first_name));

const observableB$ = ajax('https://random-data-api.com/api/v2/users').pipe(map((res: any) => res.response.first_name));


forkJoin([observableA$, observableB$]).subscribe(([a, b]) => console.log(`Name 1 is ${a} & Name b is ${b}`))