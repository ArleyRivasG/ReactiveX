import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6); //of es un observable sincrono
// const obs$ = of(...[1,2,3,4,5,6], 2,3,4); 
const obs$ = of<any>([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true)); 


obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia')
);