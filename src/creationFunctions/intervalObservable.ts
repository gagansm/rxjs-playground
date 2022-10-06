import { Observable, from, fromEvent, interval, Subscription, timer } from "rxjs";

const observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}
let timer$: Subscription;

// timer$ = interval(1000).subscribe(observer);

// setTimeout(() => {
//   timer$.unsubscribe();
// }, 10000);

const ownInterval = (time: number) => {
  return new Observable(subscriber => {
    let count = 0;
    let intervalId = setInterval(()=> {
      subscriber.next(count++);
    }, 1000);

    return () => {
      console.log('Teardown')
      clearInterval(intervalId);
    }
  })
}

timer$ = ownInterval(1000).subscribe(observer);

setTimeout(() => {
  timer$.unsubscribe();
}, 10000);



