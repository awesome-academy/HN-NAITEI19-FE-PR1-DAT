const currentUserId = 1;

const formNode = {
  id: document.getElementById("confirm-id"),
  name: document.getElementById("confirm-name"),
  subname: document.getElementById("confirm-subname"),
  company: document.getElementById("confirm-company"),
  address: document.getElementById("confirm-address"),
  nation: document.getElementById("confirm-nation"),
  zip: document.getElementById("confirm-zip"),
  phone: document.getElementById("confirm-phone"),
};

const btnNode = document.getElementById("confirm-btn");

const getData = async (formNode) => {
  const fetchUrl = `http://localhost:3000/users/${currentUserId}`;
  const response = await fetch(fetchUrl);
  const user = await response.json();

  formNode.id.value = user.id;
  formNode.name.value = user.name;
  formNode.subname.value = user.subname;
  formNode.company.value = user.company;
  formNode.address.value = user.address;
  formNode.nation.value = user.nation;
  formNode.zip.value = user.zip;
  formNode.phone.value = user.phone;
};

getData(formNode);

btnNode.onclick = () => {
  const submitData = {
    user: {
      id: formNode.id.value,
      name: formNode.name.value,
      subname: formNode.subname.value,
      company: formNode.company.value,
      address: formNode.address.value,
      nation: formNode.nation.value,
      zip: formNode.zip.value,
      phone: formNode.phone.value,
    },
    cart: JSON.parse(localStorage.getItem("currentCart")),
  };

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submitData),
  };

  fetch("http://localhost:3000/orders", requestOptions);

  localStorage.clear();
};
