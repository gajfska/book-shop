import {animate, state, style, transition, trigger} from '@angular/animations';

export const deleteAnimation = trigger('deleteBook', [
    state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('* => void', [
        animate(800, style({
            transform: 'translateX(70px)',
            opacity: 0
        }))
    ])
]);

export const  searchAnimation = trigger('searchBook', [
    state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
    })),
    transition('void => *', [
        style({
            opacity: 0,
            transform: 'translateY(-30px)'
        }),
        animate(500)
    ]),
    transition('* => void', [
        animate(500, style({
            transform: 'translateY(-30px)',
            opacity: 0
        }))
    ])
]);


