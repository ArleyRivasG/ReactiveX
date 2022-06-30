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
            console.log(count);
            count++;
    }, 1000);

    setTimeout(()=>{
        subscriber.complete(); //finaliza los subscribe y dispara el return
    }, 2500)

    return() => { //se ejecuta por cada unsubscribe (cada instancia)
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

setTimeout(()=>{
    subs1.unsubscribe(); //Cancelamos la subscription
    subs2.unsubscribe(); //Cancelamos la subscription
    
    console.log('completado Timeout');

}, 6000);


//Cada subscribe realiza una nueva instancia del Observable

//el .complete() no es lo mismo que el .unsubscribe()