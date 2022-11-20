import { Observable, timer } from 'rxjs';

console.log('App started');

// timer(2000).subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed!'),
// });

const timer$ = new Observable<number>((subscriber) => {
  setTimeout(() => {
    subscriber.next(0);
    subscriber.complete();
  }, 2000);
});
