import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(
        () => subs.next( Math.random()), 3000
    );

    return () => clearInterval( intervalID );

});

/*
* 1. Casteo múltiple = muchas subscripciones subjetas al mismo observable, misma información para todos los subscribe 
* 2. Tambien es un observer 
* 3. puede mandar el next, error y complete
*/

const subject$ = new Subject();
intervalo$.subscribe( subject$ );

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

const subs1 = subject$.subscribe(rnd => console.log('subs1', rnd)); //las subscripciones pasan a ser las mismas
const subs2 = subject$.subscribe(rnd => console.log('subs2', rnd));