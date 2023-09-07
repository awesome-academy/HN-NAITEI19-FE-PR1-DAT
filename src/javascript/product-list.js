const productsId = document.getElementById("products-list__products");

const paginateContainerId = document.getElementById(
  "product-paginate__container"
);

const renderProducts = async () => {
  while (productsId.lastElementChild) {
    productsId.removeChild(productsId.lastElementChild);
  }

  while (paginateContainerId.lastElementChild) {
    paginateContainerId.removeChild(paginateContainerId.lastElementChild);
  }

  const category = localStorage.getItem("filterKeyword");
  const currentPage = localStorage.getItem("currentPage");

  const fetchUrl =
    category !== "all"
      ? `http://localhost:3000/products?category=${category}`
      : `http://localhost:3000/products?`;

  const responseAll = await fetch(fetchUrl);
  const productsAll = await responseAll.json();

  const paginateSize = Math.ceil(productsAll.length / 4);

  const prevNode = document.createElement("li");
  prevNode.classList.add("page-item");
  prevNode.innerHTML =
    '<a class="page-link" aria-label="Previous"><span aria-hidden="true">&laquo;</span><span class="sr-only">Previous</span></a>';
  paginateContainerId.appendChild(prevNode);

  for (let i = 0; i < paginateSize; i++) {
    const itemNode = document.createElement("li");
    if (currentPage == i + 1) itemNode.classList.add("active");
    itemNode.classList.add("page-item");
    itemNode.innerHTML = `<a class="page-link product-paginate__link">${
      i + 1
    }</a>`;
    itemNode.onclick = () => {
      localStorage.setItem("currentPage", i + 1);
      renderProducts();
    };
    paginateContainerId.appendChild(itemNode);
  }

  const nextNode = document.createElement("li");
  nextNode.classList.add("page-item");
  nextNode.innerHTML =
    '<a class="page-link" aria-label="Next"><span aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a>';
  paginateContainerId.appendChild(nextNode);

  const fetchUrlLimited =
    category !== "all"
      ? `http://localhost:3000/products?category=${category}&_page=${currentPage}&_limit=4`
      : `http://localhost:3000/products?_page=${currentPage}&_limit=4`;
  const response = await fetch(fetchUrlLimited);
  const products = await response.json();

  products.forEach((product) => {
    const productNode = document.createElement("div");
    productNode.id = `productID-${product.id}`;
    productNode.classList.add("drink-detail");
    productNode.classList.add("col-12");
    productNode.classList.add("row");
    productNode.innerHTML = `<div class="drink-detail__images col-4 row">
    <img src="${product.images[0]}" alt="wine" />
  </div>
  <div class="drink-detail__order-info col-8">
    <div class="product-info">
      <a
        class="product-title product-title--left"
        href="detail.html"
        id="product-name"
      >
        ${product.name}
      </a>
      <p class="product-price" id="product-price">
        ${product.prices[0]} <span>đ</span>
      </p>
      <div class="drink-product-desc">
        <div class="product-desc__content">
          Một hợp chất có trong rượu vang gọi là resverato có khả
          năng làm tăng tuổi thọ. Ngăn chặn mật độ oxy hóa của
          protein béo
        </div>
      </div>
      <div class="drink-product-action">
        <div class="drink-btn">
        <a href="#" class="drink-btn__link" product-id="${product.id}">Add to cart</a>
        </div>
        <div class="drink-action drink-action--like">
          <img src="./img/icon/heart.svg" alt="heart" />
          <p>Yêu thích</p>
        </div>
        <div class="drink-action drink-action--compare">
          <img src="./img/icon/bar-chart.svg" alt="bar chart" />
          <p>So sánh</p>
        </div>
      </div>
    </div>
  </div>`;
    productNode.onclick = () => {
      localStorage.setItem("productId", product.id);
    };
    productsId.appendChild(productNode);
  });

  localStorage.setItem("filterKeyword", "all");
  localStorage.setItem("currentPage", 1);
};

renderProducts();

const categoryList = document.getElementsByClassName("category-items__name");

for (let i = 0; i < categoryList.length; i++) {
  const filterKeyword = categoryList[i].getAttribute("data-custom-value");

  categoryList[i].onclick = () => {
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].classList.contains("active")) {
        categoryList[i].classList.remove("active");
      }
    }
    categoryList[i].classList.add("active");
    localStorage.setItem("filterKeyword", filterKeyword);
    renderProducts();
  };
}

const applyAction = async () => {
  const addBtnNodes = document.getElementsByClassName("drink-btn__link");

  for (let i = 0; i < addBtnNodes.length; i++) {
    const productId = addBtnNodes[i].getAttribute("product-id");

    const fetchUrl = `http://localhost:3000/products/${productId}`;
    const response = await fetch(fetchUrl);
    const product = await response.json();

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

setTimeout(() => {
  applyAction();
}, 500);
