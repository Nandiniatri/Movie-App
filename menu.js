// document.getElementById('menuji').addEventListener('click', () => {
// });
 
class MenuJI {
    constructor(data) {
        this.data = data;
    }

    renderData() {
        const html = this.data.restaurantData.map((restaurant) => {
            const itemsHtml = restaurant.items.map(item => {
                return `<div class="names">${item.name} -------------------------------------- Rs.${item.price}</div>`;
            }).join('');

            return `<div>
                        <h2 class="h2-title">${restaurant.title}</h2>
                        ${itemsHtml}
                    </div>`;
        }).join('');
        
        const tpl = `<div><h1 class="special">Special Menu</h1></div>`

        document.getElementById('menuji').addEventListener('click', () => {
            const menuModal = document.getElementById('menuModal');
            const menuContent = document.getElementById('menuContent');

            menuContent.innerHTML = tpl + html;

            menuModal.style.display = 'block';

            const closeBtn = document.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                menuModal.style.display = 'none';
            });
        });
    }
}

async function fetchData() {
    try {
        const data = await dataService.getData("data/menu.json");
        console.log(data);
        const menuCart = new MenuJI(data);
        menuCart.renderData();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
