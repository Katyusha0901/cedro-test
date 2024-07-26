const dataStorage = {
    products: [
        {
            id: 1,
            name: `Brown to Blonde`,
            description: `Пигмент для бровей`,
            volume: 12,
            oldPrice: 3000,
            newPrice: 1500,

            type: `Sale`,
            isSaved: false,
            color: `#C08D74`,
        },
        {
            id: 2,
            name: `Brown to Blonde`,
            description: `Пигмент для бровей`,
            volume: 12,
            oldPrice: 3000,
            newPrice: 1500,

            type: `Акция! 1+1=3`,
            isSaved: false,
            color: `#EA976F`,
        },
        {
            id: 3,
            name: `Brown to Blonde`,
            description: `Пигмент для бровей`,
            volume: 12,
            oldPrice: 3000,
            newPrice: 1500,

            type: `Sale`,
            isSaved: false,
            color: `#C07474`,
        },
        {
            id: 4,
            name: `Brown to Blonde`,
            description: `Пигмент для бровей`,
            volume: 12,
            oldPrice: 3000,
            newPrice: 1500,

            type: `Бесплатная доставка`,
            isSaved: false,
            color: `#EA976F`,
        },
        {
            id: 5,
            name: `Brown to Blonde`,
            description: `Пигмент для бровей`,
            volume: 12,
            oldPrice: 3000,
            newPrice: 1500,

            type: `Sale`,
            isSaved: false,
            color: `#C08D74`,
        },
    ],

    savedProducts: 0,
};

export function saveProduct(id) {
    const element = document.getElementById(id);

    dataStorage.products[id - 1].isSaved =
        !dataStorage.products[id - 1].isSaved;
    dataStorage.savedProducts += 1;

    if (dataStorage.products[id - 1].isSaved) {
        element.classList = `product__save-true`;
    } else {
        element.classList = `product__save-false`;
    }
}
