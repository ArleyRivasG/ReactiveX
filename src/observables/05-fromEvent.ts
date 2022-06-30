 import { fromEvent } from "rxjs";

 /*
    Eventos del DOM
 */

const scr1 = fromEvent<PointerEvent>(document, 'click');  //al dar clic
const scr2 = fromEvent<KeyboardEvent>(document, 'keyup'); //cuando soltamos alguna tecla presionada

const observer = {
    next: valor => console.log('next,', valor)
};

// scr1.subscribe(evento =>{
//     console.log(evento.x);
//     console.log(evento.y);
// });
scr1.subscribe(({x, y}) => { //recibimos solo los valores x & y de PointerEvent
    console.log(x, y);
});
scr2.subscribe(evento => {
    console.log(evento.key);
});