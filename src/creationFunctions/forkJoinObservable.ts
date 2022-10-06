import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin } from "rxjs";
import { ajax } from "rxjs/ajax";

const observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}


const observableA$ = ajax('https://random-data-api.com/api/v2/users');//.subscribe(value =>  console.log(value.response));

const observableB$ = ajax('https://random-data-api.com/api/v2/users');//.subscribe(value =>  console.log(value.response));

const observableForkJoin = forkJoin([observableA$, observableB$]).subscribe(observer);

//forkJoin: when constituent observables are all complete only then the forkjoin will notify the observer with all latest values of all the observables. When B observable fails, forkJoin will cancel/teardown all other observable subscriptions & then tear down B observable. It does not straight away teardown B obs when error appears in B. It makes sure other obvs are unsubscribed first. This is imp in forkJoin



