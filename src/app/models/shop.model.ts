export class Shop{
    shopItems: any;

    constructor(){
        this.shopItems = [
            {
                title: 'Logitech G213 Prodigy Teclado',
                desc: 'Teclado gaming de Logitech',
                picture: '../assets/images/teclado/logitechteclado.jpg',
                price: 79
            },
            {
                title: 'MSI Vigor GK30 Tecalado',
                desc: 'Teclado gaming RGB de MSI',
                picture: '../assets/images/teclado/tecladomsi.jpg',
                price: 59
            },
            {
                title: 'Razer Huntsman Mini Teclado',
                desc: 'Mini Teclado Gaming Razer',
                picture: '../assets/images/teclado/tecladorazer.jpg',
                price: 59
            },
        ]
    }
}
