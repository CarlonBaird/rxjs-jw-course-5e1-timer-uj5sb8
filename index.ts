import { Observable, timer } from 'rxjs';

console.log('App started');

const subscription1 = timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Sub1:', 'Completed!'),
});

setTimeout(() => {
  console.log('Sub1:', 'Unsubscribed');
  subscription1.unsubscribe();
}, 1000);

const timer$ = new Observable<number>((subscriber) => {
  const timeoutId = setTimeout(() => {
    console.log('Timeout - subscription 2!');
    subscriber.next(0);
    subscriber.complete();
  }, 2000);

  //Teardown logic: we need to properly clean up to avoid memory leaks
  return () => clearTimeout(timeoutId);
});

const subscription2 = timer$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});

setTimeout(() => {
  console.log('Sub2:', 'Unsubscribed');
  subscription2.unsubscribe();
}, 1000);
