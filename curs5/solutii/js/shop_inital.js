let products = [
   {
        name: 'Reparatii electrocasnice',
        price: 70,
        image: ' https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neXx8fHx8fDE2NzExMDgwODM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Petul este doar pentru deplasare si constatare',
    },
    {
        name: 'Plimbari cu barca',
        price: 100,
        image: 'https://images.unsplash.com/photo-1669561337256-a5b076939826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3MTEwNzc2NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        description: 'Plimbari cu barca timp de 5 ore',
    },
    {
        name: 'Paste',
        price: 45.50,
        image: 'https://assets.codepen.io/652/shania-pinnata-7E-vKgzahd8-unsplash.jpg',
        description: 'Cele mai bune paste din oras',
    },
    {
        name: 'Prajituri',
        price: 25.50,
        image: 'https://images.unsplash.com/photo-1534432182912-63863115e106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
        description: 'Diverse sortimete de prajituri',
    },
   {
        name: 'Salata mediteraneana',
        price: 17.5,
        image: 'https://images.unsplash.com/photo-1644704170910-a0cdf183649b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        description: 'Salata cu seminte, mozzarella, broccoli',
    },
    {
        name: 'Cocktail de capsuni',
        price: 10.5,
        image: 'https://images.unsplash.com/photo-1508254627334-d4fa3a515b22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        description: 'Cocktail delicios de capsuni cu miere si lamaie',
    }, 
    {
        name: 'Sandvis',
        price: 20.75,
        image: 'https://images.unsplash.com/photo-1643133277733-66a476f7f32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        description: 'Sandvis delicios cu mozzarella si sos barbeque',
    }, 
]

// Initial
// function showProducts(){
//     for (const product in products) {
//         i=0;
       
//             console.log(products[product[i]].name);
//         i++;
//     }
// }
// function showProducts(){
//     products.forEach(product =>{
//         console.log(product.name);

//     })
// }

function showProducts(){
    products.forEach(product =>{
        console.log(product.name);
        let div = document.createElement('div')
                    div.classList.add('product')
                    div.innerHTML = `
                        <h2 class="name">${product.name}</h2>
                        <p class="price">Pret: ${product.price}</p>
                        <p class="image"><img src="${product.image}"></p>
                        <p class="description">${product.description}</p>
                    `
                    document.getElementById('products').append(div)
    })
}
showProducts();

