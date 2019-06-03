const button = document.querySelector('button'); // Observable element

// Observer object to define functions based on which methods are invoked
const observer = {
    next: value => console.log(value),
    error: err => console.log(err),
    complete: () => console.log('completed!')
}

// Observable setup
Rx.Observable.fromEvent(button, 'click')
    .subscribe(observer)

// Creating an Observable
Rx.Observable.create(
    obs => obs.next('some value!')
).subscribe(observer); // Returns 'some value!'
// This is because the obs param is the observer method
// Once created, it invokes the next method, which we defined as console logging value
// observer --> obs --> obs.next === observer.next

const subscription = Rx.Observable.create(
    obs => {
        button.onclick = event => {
            obs.next(event);
            // make sure to unsubscribe when possible to avoid memory leaks
            subscription.unsubscribe();
        }
    }
).subscribe(observer);
