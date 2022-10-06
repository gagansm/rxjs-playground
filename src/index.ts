import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter, map, of, tap, debounceTime, catchError, EMPTY, concatMap, Subject, BehaviorSubject, withLatestFrom } from "rxjs";
import { ajax } from "rxjs/ajax";

const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));

isLoggedIn$.subscribe(value => loggedInSpan.innerText = value.toString());

isLoggedIn$.subscribe(isLoggedIn => {
  logoutButton.style.display = isLoggedIn ? 'block' : 'none';
  loginButton.style.display = !isLoggedIn ? 'block' : 'none'
});

fromEvent(printStateButton, 'click').subscribe(() => console.log(`user is ${isLoggedIn$.value}`));

fromEvent(printStateButton, 'click').pipe(
  withLatestFrom(isLoggedIn$)
).subscribe(([clickEvent, isloggedInValue]) => console.log(`user is ${isloggedInValue}`));

//can use 
