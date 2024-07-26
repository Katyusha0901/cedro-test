const dataStorage = {
    products: [
        {
            id: 1,
            isSaved: false,
        },
        {
            id: 2,
            isSaved: false,
        },
        {
            id: 3,
            isSaved: false,
        },
        {
            id: 4,
            isSaved: false,
        },
        {
            id: 5,
            isSaved: false,
        },
    ],

    savedProducts: 0,
};

export function saveProduct(id) {
    const product = document.getElementById(id);
    const savedIcon = document.querySelector(`.header__sections-icon-saved`);
    let savedProductsIds = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8, 88, 8];

    dataStorage.products[id - 1].isSaved =
        !dataStorage.products[id - 1].isSaved;
    dataStorage.products.forEach((product) => {
        if (product.isSaved) {
            savedProductsIds.push(product.id);
        }
    });

    dataStorage.savedProducts = savedProductsIds.length;

    savedIcon.textContent = dataStorage.savedProducts;

    if (dataStorage.products[id - 1].isSaved) {
        product.classList = `products__save-true`;
    } else {
        product.classList = `products__save-false`;
    }
}
