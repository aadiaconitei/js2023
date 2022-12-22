let products = [
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




// FInal
// function showProducts()
// {
//     clearProducts()

//     let minPrice = document.querySelector('#min').value
//     let maxPrice = document.querySelector('#max').value

//     products
//         .filter(product => product.price >= minPrice && product.price <= maxPrice)
//         .forEach(product => {
//             let div = document.createElement('div')
//             div.classList.add('product')
//             div.innerHTML = `
//                 <h2 class="name">${product.name}</h2>
//                 <p class="price">Pret: ${product.price}</p>
//                 <p class="image"><img src="${product.image}"></p>
//                 <p class="description">${product.description}</p>
//             `
//             document.querySelector('#products').append(div)
//     });
// }

// function clearProducts()
// {
//     document.querySelector('#products').replaceChildren()
// }

// function updateMinPrice() {
//     let minPrice = document.querySelector('#min').value
//     document.querySelector('#minValue').innerText = minPrice
// }

// function updateMaxPrice() {
//     let maxPrice = document.querySelector('#max').value
//     document.querySelector('#maxValue').innerText = maxPrice
// }

// function init() {
//     showProducts()
//     updateMinPrice()
//     updateMaxPrice()
// }

// window.addEventListener('load', init)
// document.querySelector('#filter').addEventListener('click', showProducts)
// document.querySelector('#min').addEventListener('change', updateMinPrice)
// document.querySelector('#max').addEventListener('change', updateMaxPrice)