import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    let count = 1;
   const interval = setInterval( () =>{
            subscriber.next(count);
            count++;
            console.log(count);
    }, 1000);

    return() => {
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }



});

const subs1 = intervalo$.subscribe(num => console.log('Num: ', num));
const subs2 = intervalo$.subscribe(num => console.log('Num: ', num));

setTimeout(()=>{
    subs1.unsubscribe(); //Cancelamos la subscription
    subs2.unsubscribe(); //Cancelamos la subscription
    
    console.log('completado Timeout');

}, 5000);


//Cada subscribe realiza una nueva instancia del Observable