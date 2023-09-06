const currentCart = localStorage.getItem("currentCart");

const tableNode = document.getElementById("drink-table__body");

if (currentCart) {
  const cart = JSON.parse(currentCart);
  cart.forEach((order) => {
    const rowNode = document.createElement("tr");
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
      <img src="./img/icon/trash.svg" alt="trash icon" class="drink-table__delete" data-id="${
        order.productId
      }"/>
    </div>
  </td>`;
    tableNode.appendChild(rowNode);
  });

  const deleteNodeList = document.getElementsByClassName("drink-table__delete");
  for (let i = 0; i < deleteNodeList.length; i++) {
    deleteNodeList[i].onclick = () => {
      const productIndex = cart.findIndex(
        (item) => item.productId == deleteNodeList[i].getAttribute("data-id")
      );
      cart.splice(productIndex, 1);
      if (cart.length > 0) {
        localStorage.setItem("currentCart", JSON.stringify(cart));
      } else {
        localStorage.removeItem("currentCart");
      }
      location.reload();
    };
  }
}
