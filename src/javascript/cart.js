const currentCart = localStorage.getItem("currentCart");

const tableNode = document.getElementById("drink-table__body");

if (currentCart) {
  const cart = JSON.parse(currentCart);
  cart.forEach((order) => {
    const rowNode = document.createElement("tr");
    console.log("🚀 ~ file: cart.js:10 ~ cart.forEach ~ rowNode:", rowNode);
    rowNode.innerHTML = `<th scope="row" class="align-middle">
    <div class="drink-table__image">
      <img src="${order.image}" alt="wine" />
    </div>
  </th>
  <td class="align-middle">
    <div class="drink-table__name">${order.name}</div>
  </td>
  <td class="align-middle">
    <div class="drink-table__price">${
      order.price / 1000
    }.000 <span>đ</span></div>
  </td>
  <td class="align-middle">
    <div class="drink-table__quantity">${order.quantity}</div>
  </td>
  <td class="align-middle">
    <div class="drink-table__total">${
      order.total / 1000
    }.000 <span>đ</span></div>
  </td>
  <td class="align-middle">
    <div class="drink-table__icon">
      <img src="./img/icon/trash.svg" alt="trash icon" />
    </div>
  </td>`;
    tableNode.appendChild(rowNode);
  });
}
