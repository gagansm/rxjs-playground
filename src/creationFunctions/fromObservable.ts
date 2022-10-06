import { Observable, from } from "rxjs";

const observer = {
  next: (value: any) => console.log(value),
  complete: () => console.log('Completed'),
  error: (error: any) => console.log('Error' + error)
}

from(['Alice', 'Ben', 'Charlie']).subscribe(observer);

from(new Promise((resolve, reject) => {
  resolve('Resolved');
})).subscribe(observer);

from(new Promise((resolve, reject) => {
  reject(' Rejected');
})).subscribe(observer);

const promise = async () => {
  return 'Resolved';
}

from(promise()).subscribe(observer);