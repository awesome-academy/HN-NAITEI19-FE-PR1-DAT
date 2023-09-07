const bestProductNode = document.getElementById("best-product");
const newProductsNode = document.getElementById("drink-new__carousel");
const goodProductsNode = document.getElementById("drink-good__carousel");

const renderProducts = async () => {
  const fetchUrl = `http://localhost:3000/products`;
  const response = await fetch(fetchUrl);
  const products = await response.json();
  console.log("🚀 ~ file: index.js:9 ~ renderProducts ~ products:", products);

  bestProductNode.innerHTML = `<img src="./img/thumbs/grape-green.jpg" alt="green grape" />
  <div class="drink-best container">
    <div class="drink-best__item product-item row">
      <div class="product-thumbnail col-12 col-md-7">
        <div class="product-tag product-tag--sale">
          <span>Sale</span>
        </div>
        <img src="${products[0].images[0]}" alt="product" />
      </div>
      <div class="product-info col-12 col-md-5">
        <a class="product-title product-title--left" href="detail.html">
          ${products[0].name}
          <img
            src="./img/thumbs/titleleft-dark.png"
            alt="title left dark"
          />
        </a>
        <p class="product-price">330.000 <span>đ</span></p>
        <div class="drink-btn">
          <a href="#" product-id="${products[0].id}" class="drink-btn__link">Add to cart</a>
        </div>
        <p class="product-desc">
          Một hợp chất có trong rượu vang được gọi là resveratro có khả
          năng làm tăng tối đa tuổi thọ. Resveratro còn có khả năng ngăn
          chặn mật độ ôxy hóa của protein béo.
        </p>
        <div class="product-sale">
          <div class="product-sale__row">
            <div class="product-row__item">
              <div class="product-row__time">334 <span>ngày</span></div>
            </div>
            <div class="product-row__item">
              <div class="product-row__time">26 <span>giờ</span></div>
            </div>
          </div>
          <div class="product-sale__row">
            <div class="product-row__item">
              <div class="product-row__time">60 <span>phút</span></div>
            </div>
            <div class="product-row__item">
              <div class="product-row__time">15 <span>giây</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  newProductsNode.innerHTML = `<div class="carousel-inner">
  <div class="carousel-item active">
    <div class="row">
      <div class="product-thumbnail col-12 col-md-3">
        <div class="product-tag product-tag--sale product-tag--small">
          <span>Sale</span>
        </div>
        <img
          src="${products[1].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[1].name}
          </a>
          <p class="product-price">${products[1].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[1].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <div class="product-tag product-tag--new product-tag--small">
          <span>Mới</span>
        </div>
        <img
          src="${products[2].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[2].name}
          </a>
          <p class="product-price">${products[2].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[2].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <div class="product-tag product-tag--hot product-tag--small">
          <span>Hot</span>
        </div>
        <img
          src="${products[3].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[3].name}
          </a>
          <p class="product-price">${products[3].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[3].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[4].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[4].name}
          </a>
          <p class="product-price">${products[4].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[4].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="row">
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[5].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[5].name}
          </a>
          <p class="product-price">${products[5].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[5].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[6].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[6].name}
          </a>
          <p class="product-price">${products[6].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[6].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[7].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[7].name}
          </a>
          <p class="product-price">${products[7].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[7].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[8].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[8].name}
          </a>
          <p class="product-price">${products[8].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[8].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<a
  class="carousel-control-prev"
  href="#drink-new__carousel"
  role="button"
  data-slide="prev"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a
  class="carousel-control-next"
  href="#drink-new__carousel"
  role="button"
  data-slide="next"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>`;

  goodProductsNode.innerHTML = `<div class="carousel-inner">
  <div class="carousel-item active">
    <div class="row">
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[1].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[1].name}
          </a>
          <p class="product-price">${products[1].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[1].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[2].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[2].name}
          </a>
          <p class="product-price">${products[2].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[2].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[3].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[3].name}
          </a>
          <p class="product-price">${products[3].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[3].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[4].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[4].name}
          </a>
          <p class="product-price">${products[4].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[4].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <div class="row">
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[5].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[5].name}
          </a>
          <p class="product-price">${products[5].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[5].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[6].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[6].name}
          </a>
          <p class="product-price">${products[6].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[6].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[7].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[7].name}
          </a>
          <p class="product-price">${products[7].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[7].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
      <div class="product-thumbnail col-12 col-md-3">
        <img
          src="${products[8].images[0]}"
          alt="product"
          class="d-block w-100"
        />
        <div class="product-info product-info--center">
          <a class="product-title product-title--new-size" href="detail.html">
            ${products[8].name}
          </a>
          <p class="product-price">${products[8].prices[0]} <span>đ</span></p>
          <div class="drink-btn">
            <a href="#" product-id="${products[8].id}" class="drink-btn__link">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<a
  class="carousel-control-prev"
  href="#drink-good__carousel"
  role="button"
  data-slide="prev"
>
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a
  class="carousel-control-next"
  href="#drink-good__carousel"
  role="button"
  data-slide="next"
>
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>`;
};

const applyAction = async () => {
  const addBtnNodes = document.getElementsByClassName("drink-btn__link");

  const titleNodes = document.getElementsByClassName("product-title");

  for (let i = 0; i < addBtnNodes.length; i++) {
    const productId = addBtnNodes[i].getAttribute("product-id");

    const fetchUrl = `http://localhost:3000/products/${productId}`;
    const response = await fetch(fetchUrl);
    const product = await response.json();

    titleNodes[i].onclick = () => {
      localStorage.setItem("productId", product.id);
    };

    addBtnNodes[i].onclick = () => {
      const addProduct = {
        productId: product.id,
        name: product.name,
        image: product.images[0],
        price: Number.parseInt(product.prices[0]) * 1000,
        quantity: 1,
        total: Number.parseInt(product.prices[0]) * 1000,
      };

      const currentCart = localStorage.getItem("currentCart");
      if (currentCart) {
        const cart = JSON.parse(currentCart);
        const oldProductIndex = cart.findIndex(
          (item) => item.productId === addProduct.productId
        );
        if (oldProductIndex > -1) {
          cart[oldProductIndex].quantity += addProduct.quantity;
          cart[oldProductIndex].total += addProduct.total;
        } else cart.push(addProduct);
        localStorage.setItem("currentCart", JSON.stringify(cart));
      } else {
        const cart = [addProduct];
        localStorage.setItem("currentCart", JSON.stringify(cart));
      }
    };
  }
};

renderProducts();

setTimeout(() => {
  applyAction();
}, 500);
