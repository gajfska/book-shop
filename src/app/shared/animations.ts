import {animate, state, style, transition, trigger} from '@angular/animations';

export const deleteAnimation = trigger('deleteBook', [
    state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    transition('* => void', [
        animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
        }))
    ])
]);

