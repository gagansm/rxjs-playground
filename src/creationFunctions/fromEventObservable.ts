import { Observable, from, fromEvent, interval, Subscription } from "rxjs";

const observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}

const eventObserver = {
  next: (event: Event) => console.log('sub1'+event.type),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}

const eventObserver2 = {
  next: (event: Event) => console.log('sub2'+event.type),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}

const triggerButton = document.querySelector('button#trigger');

fromEvent(triggerButton, 'click').subscribe(eventObserver);

let sub1: Subscription, sub2: Subscription;
setTimeout(() => {
  sub1 = fromEvent(triggerButton, 'click').subscribe(eventObserver);
}, 2000);

setTimeout(() => {
  sub2 = fromEvent(triggerButton, 'click').subscribe(eventObserver2);
}, 5000);

function ownFromEvent(element: Element, eventName: string) {
  return new Observable(subscriber => {
    const clickListener = (event: Event) => {
      subscriber.next(event);
    }
    element.addEventListener(eventName, clickListener);

    return () => {
      element.removeEventListener('click', clickListener);//remove the same handler that you had added in add event listener
    }
  })
}

//ownFromEvent(triggerButton, 'click').subscribe(eventObserver)

setTimeout(() => {
  sub2.unsubscribe();
}, 10000);

setTimeout(() => {
  sub1.unsubscribe();
}, 15000);

