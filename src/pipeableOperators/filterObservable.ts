import { Observable, from, fromEvent, interval, Subscription, timer, forkJoin, combineLatest, filter } from "rxjs";
import { ajax } from "rxjs/ajax";

interface NewsItem {
  category: 'Business' | 'Sports',
  content: string;
}

const newsFeed$ = new Observable<NewsItem>(subscriber => {
  setTimeout(() => {
    subscriber.next({ category: "Business", content: 'A'})
  }, 1000);

  setTimeout(() => {
    subscriber.next({ category: "Sports", content: 'B'})
  }, 3000);

  setTimeout(() => {
    subscriber.next({ category: "Business", content: 'C'})
  }, 4000);

  setTimeout(() => {
    subscriber.next({ category: "Sports", content: 'D'})
  }, 5000);

  setTimeout(() => {
    subscriber.next({ category: "Business", content: 'E'})
  }, 1000);

});

newsFeed$.pipe(
  filter((newsItem) => newsItem.category === 'Sports')
).subscribe({
  next: value => console.log(value),
  
})

