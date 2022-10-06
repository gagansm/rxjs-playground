import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

const interval$ = new Observable<number>(subscriber => {
  let count = 0;
  
  const id = setInterval(()=> {
    subscriber.next(++count);
  }, 1000);
  
  return () => {
    console.log('Teardown');
    clearInterval(id);
  }
});

const observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (err: any) => console.log(err),
};

console.log('Before executing the observable');
const subscirption = interval$.subscribe(observer);
console.log('after executing the observable');

setTimeout(() => {
  console.log('Unsubscribing')
  subscirption.unsubscribe();
}, 7000);

