import { Observable, of } from "rxjs";

const ourOwnOf = (...args: string[]) => {
  return new Observable(subscriber => {
    args.forEach(element => {
      subscriber.next(element);
    });
    subscriber.complete();
  })
}

const observableOwn$ = ourOwnOf('Alice', 'Ben', 'Charlie');
const observable$ = of('Alice', 'Ben', 'Charlie');

observable$.subscribe({
  next: (value: string) => console.log(value),
  complete: () => console.log('Completed')
});

observableOwn$.subscribe({
  next: (value: string) => console.log(value),
  complete: () => console.log('Completed')
});
