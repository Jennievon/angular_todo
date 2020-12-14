import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from "@angular/animations";

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-out', keyframes([
        style({
            offset: .2,
            opacity: 1,
            transform: 'translateX(20px)'
        }),
        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100px)'
        }),
    ]))
)

export let fadeInAnimation = animation([
    style({ opacity: 0 }),
    animate('{{duration}} {{easing}}')
], {
    params: {
        duration: '2s',
        easing: 'ease-out'
    }
}

)

export let fade = trigger('fade', [
    transition(':enter', [
        useAnimation(fadeInAnimation)
    ]),
    transition(':leave', [
        animate(1000),
        style({ opacity: 0 })
    ]),
])

export let slide = trigger('slide', [
    // state('void', style({ transform: 'translateX(-20px)' })),
    transition(':enter', [
        style({ transform: 'translateX(-20px)' }),
        animate('0.5s ease-out')
    ]),
    transition(':leave',
        useAnimation(bounceOutLeftAnimation)
    ),
])