export function displayMenu() {
    const menu = document.querySelector(`.menu`);
    menu.style.display === `none`
        ? (menu.style.display = `flex`)
        : (menu.style.display = `none`);
}
