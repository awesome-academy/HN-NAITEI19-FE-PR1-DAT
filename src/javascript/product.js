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

  const paginateSize = Math.ceil(productsAll.length / 9);

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
      ? `http://localhost:3000/products?category=${category}&_page=${currentPage}&_limit=9`
      : `http://localhost:3000/products?_page=${currentPage}&_limit=9`;
  const response = await fetch(fetchUrlLimited);
  const products = await response.json();

  products.forEach((product) => {
    const productNode = document.createElement("div");
    productNode.id = `productID-${product.id}`;
    productNode.classList.add("product-thumbnail");
    productNode.classList.add("col-12");
    productNode.classList.add("col-md-4");
    productNode.innerHTML = `<img src="${product.images[0]}" alt="product"class="d-block w-100"/><div class="product-info product-info--center"><a class="product-title product-title--new-size" href="detail.html">${product.name}</a><p class="product-price">${product.prices[0]} <span>đ</span></p><div class="drink-btn"><a href="#">Add to cart</a></div></div>`;
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
