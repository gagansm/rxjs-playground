import { Observable, from, fromEvent, interval, Subscription, timer } from "rxjs";

const observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}
let timer$: Subscription;
//let timer$ = timer(2000).subscribe(observer);

const ownTimer = (time: number) => {
  return new Observable(subscriber => {
    let timeout = setTimeout(() => {
      console.log('inside timeout'); // even without teardown logic the observable will
      // not call next/complete notifications. But we still need to cleanup
      subscriber.next(0);
      subscriber.complete();
    }, time);

    return () => {
      console.log('Teardwown happening')
      clearTimeout(timeout);
    }
  });
}

timer$ = ownTimer(2000).subscribe(observer);

setTimeout(() => {
  timer$.unsubscribe();
}, 1000);


