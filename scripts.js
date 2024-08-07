const product = [
    {
        id: 0,
        image: 'img/clothes/1.jpg',
        title: 'Taavi',
        price: 120,
    },
    {
        id: 1,
        image: 'img/clothes/2.jpg',
        title: 'Nayo Kalani',
        price: 60,
    },
    {
        id: 2,
        image: 'img/clothes/4.jpg',
        title: 'Mango',
        price: 230,
    },
    {
        id: 3,
        image: 'img/clothes/3.jpg',
        title: 'Sangria',
        price: 100,
    },
    {
        id: 4,
        image: 'img/shoes/1.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 5,
        image: 'img/shoes/2.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 6,
        image: 'img/shoes/4.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 7,
        image: 'img/shoes/3.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 8,
        image: 'img/shoes/4.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 9,
        image: 'img/shoes/5.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 10,
        image: 'img/shoes/6.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 11,
        image: 'img/shoes/7.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 12,
        image: 'img/shop/1.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 13,
        image: 'img/shop/2.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 14,
        image: 'img/shop/3.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 15,
        image: 'img/shop/4.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 16,
        image: 'img/shop/5.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 17,
        image: 'img/shop/6.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 18,
        image: 'img/shop/7.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 19,
        image: 'img/shop/8.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 20,
        image: 'img/shop/9.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 21,
        image: 'img/shop/10.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 22,
        image: 'img/shop/11.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 23,
        image: 'img/shop/12.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 24,
        image: 'img/shop/13.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 25,
        image: 'img/shop/14.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 26,
        image: 'img/shop/15.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 27,
        image: 'img/shop/16.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 28,
        image: 'img/shop/17.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 29,
        image: 'img/shop/18.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 30,
        image: 'img/shop/19.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 31,
        image: 'img/shop/20.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 32,
        image: 'img/shop/21.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 33,
        image: 'img/shop/22.jpg',
        title: 'Air pods',
        price: 60,
    },
    {
        id: 32,
        image: 'img/shop/23.jpg',
        title: '250 DSLR',
        price: 230,
    },
    {
        id: 33,
        image: 'img/shop/24.jpg',
        title: 'Head phones',
        price: 100,
    },
    {
        id: 34,
        image: 'img/shop/1.jpg',
        title: 'z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 35,
        image: 'img/shop/2.jpg',
        title: 'Air pods',
        price: 60,
    }
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class=product-list id="product-list">
        <div class='box'>
            <div class='img-box'>
               <img class='images' src=${image}></img>
            </div>
         <div class='button'>
           <p>${title}</p>
             <h5>₹ ${price}.00</h5>` + "<button class='button-sm' onclick='addtocart(" + (i++) + ")'>Add to cart</button>" + `
          </div>
          </div>
          </div>`
    )
}).join('');




var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displayCart();
}

function delElement(a) {
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "₹ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class= 'row-img'>
                   <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <input style="width:50px;" class="px-1" value="1" type="number">
                <h2 style='font-size:15px;'>₹ ${price}.00</h2>` +
                "<i class='bi bi-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}




const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list");
    const product = document.querySelectorAll(".box");
    const pname = storeItems.getElementsByTagName("p")


    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('p')[0];

        if (match) {
            let textValue = match.textContent || match.innerHTML;


            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}