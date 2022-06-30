import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next : value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completad [obs]')
};

const obs$ =  new Observable <string>( subscriber =>{
    
    subscriber.next('world');
    subscriber.next('mundo');
    
    //Forzar un error
    // const a = undefined;
    // a.nombre = 'Arley;'

    subscriber.complete(); //finaliza las emiciones del observable
    subscriber.next('hello');
}); 

//subscripciones son entes que estan pendientes a las emiciones del Observable
//para que un Observable se ejecute debe tener al menos una subscripcion

                    //Sin OBSERVER
// obs$.subscribe(   

//     valor => console.log('next: ',   valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')

// );

                    // CON OBSERVER
obs$.subscribe( observer );


