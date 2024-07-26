// import { dataStorage } from "./dataStorage";
takeData();
function takeData() {
    const element = document.querySelector(`.products__product-type`);
    element.textContent = `1`;
    // return dataStorage.products[0].color;
    // dataStorage.products.forEach((product) => {
    //     console.log(product.id);
    //     const element = document.getElementById(`${product.id}`);
    //     element.textContent = `${product.type}`;
    // });
    // console.log(`${dataStorage.products[0].id}`);
}
