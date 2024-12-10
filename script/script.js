import goods from "./goods.js";
import sales from "./sales.js";

const goodsList = document.getElementById("goods-list");
const saleList = document.getElementById("sale-list");
const renderData = (data, elem) => {
  data.forEach((item) => {
    const li = document.createElement("li");

    const spanClass = item.sale.includes("%") ? "goods__red" : "goods__green";

    li.innerHTML = ` 
    <div class="goods__image">
      <span class="${spanClass}">${item.sale}</span>
      <img src="${item.img}" alt="img" />
    </div>

    <p class="goods__text line">${item.text}</p>
    <p class="goods__text line">
      <span>${item.oldPrice} руб.</span>
      <strong>${item.price} руб.</strong>
    </p>

    <div class="goods__group-btns">
      <button>КУПИТЬ</button>
      <button>
        <img src="img/icons/like.svg" alt="like" />
      </button>
    </div>`;

    elem.appendChild(li);
  });
};

renderData(goods, goodsList);
renderData(sales, saleList);
