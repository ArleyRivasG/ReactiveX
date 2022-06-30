import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(
        () => subs.next( Math.random()), 1000
    );

    return () =>{
        clearInterval( intervalID );
        console.log('Intervalo destruido');
    };

});

/*  ------------------------SUBJECT

* 1. Casteo múltiple = muchas subscripciones subjetas al mismo observable, misma información para todos los subscribe 
* 2. Tambien es un observer 
* 3. puede mandar el next, error y complete
*/

const subject$ = new Subject();
const subscriptionSubject = intervalo$.subscribe( subject$ ); //lo mandamos como observer

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

const subs1 = subject$.subscribe(observer); //las subscripciones pasan a ser las mismas
const subs2 = subject$.subscribe(observer);

setTimeout(() => {

    subject$.next(10); //hot observable
    subject$.complete(); //completa el subject mas no el intervalo$
    subscriptionSubject.unsubscribe(); //completa

}, 3500);

