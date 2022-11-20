import { Observable, timer } from 'rxjs';

console.log('App started');

const subscription = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);

// const timer$ = new Observable<number>((subscriber) => {
//   setTimeout(() => {
//     subscriber.next(0);
//     subscriber.complete();
//   }, 2000);
// });

// timer$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed!'),
// });
