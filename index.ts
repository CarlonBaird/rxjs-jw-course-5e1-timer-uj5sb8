import { timer } from 'rxjs';

console.log('App started');

timer(2000).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed!'),
});
