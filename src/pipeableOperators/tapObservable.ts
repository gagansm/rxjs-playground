import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter, map, of, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

from([1, 7, 5, 6, 3]).pipe(
  filter((item) => item > 5), 
  tap(value => console.log('Spy:', value)),
  map((item) => item * 2)
).subscribe(value =>  console.log('Console:', value))

// tap adds side effects & helps in debugging. Does not change the original stream in any way