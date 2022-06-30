import { Observable } from 'rxjs';



const obs$ =  new Observable <string>( subscriber =>{
    
    subscriber.next('world');
    subscriber.next('mundo');

    subscriber.complete(); //finaliza las emiciones del observable
    subscriber.next('hello');
}); 

obs$.subscribe(resp => {
    console.log(resp);
});


//subscripciones son entes que estan pendientes a las emiciones del Observable
//para que un Observable se ejecute debe tener al menos una subscripcion