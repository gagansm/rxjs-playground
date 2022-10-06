import { Observable } from "rxjs";

const helloButton = document.querySelector('button#hello');

const click$ = new Observable<PointerEvent>(subscriber => {
  helloButton.addEventListener('click', (event: PointerEvent) => {
    subscriber.next(event);
  });
  
  return () => {
    helloButton.removeEventListener('click', () => {
      console.log('listener removed')
    });
  }
});

click$.subscribe({
  next: (event: PointerEvent) => console.log('sub 1' + event.type, event.x, event.y),
});

setTimeout(() => {
  click$.subscribe({
    next: (event: PointerEvent) => console.log('sub 2' + event.type, event.x, event.y),
  });
}, 10000);