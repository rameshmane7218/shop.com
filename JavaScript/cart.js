
var cartData = JSON.parse(localStorage.getItem("cartList"));
// console.log(cartData.length)

cartData.map(function (el,index) {
    var box = document.createElement("div");

    var shippingFrom = document.createElement("section");
    shippingFrom.setAttribute("class", "shippingFrom");

    var h2 = document.createElement("h2");
    h2.setAttribute("class", "divider-bar")
    h2.textContent = "Shipment from Market America";


    var shipMsgContainer = document.createElement("section");
    shipMsgContainer.setAttribute("class", "shipMsgContainer");

    var para = document.createElement("p");
    para.setAttribute("class", "freeship__text");


    var span1 = document.createElement("span");
    span1.setAttribute("class", "strong");

    var ico = document.createElement("i");
    ico.setAttribute("class", "fa-solid fa-truck")
    span1.append(ico);

    var span2 = document.createElement("span");
    span2.setAttribute("class", "strong");

    if (Number(el.price) < 90) {
        var curr = 90 - Number(el.price);
        curr = curr.toFixed(2);
        span2.textContent = `Add $${curr}  in Market America products to qualify for Free Shipping!`
    } else {
        span2.textContent = "Congratulations, your order qualifies for Free Shipping."
    }
    para.append(span1, span2);
    shipMsgContainer.append(para);
    shippingFrom.append(h2, shipMsgContainer)



    var orderTotal = document.createElement("section");
    orderTotal.setAttribute("class", "orderTotal");


    var imgbox = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.imgUrl
    imgbox.append(img);


    var detailsBox = document.createElement("div");
    detailsBox.setAttribute("class", "detailsBox");

    var nameBox = document.createElement("div");
    var name = document.createElement("p");
    name.setAttribute("class", "nameofProduct");
    name.textContent = el.name;
    nameBox.append(name);
    console.log(el.name)

    var priceBox = document.createElement("div");
    var price = document.createElement("p");
    price.setAttribute("class", "priceofProduct");
    price.innerHTML = `$${el.price}`;
    console.log(el.price)
    priceBox.append(price);
    console.log(price.textContent)


    var cashbackBox = document.createElement("div");
    var cashback = document.createElement("p");
    cashback.setAttribute("class", "cashback");
    cashback.textContent = el.cashback;
    cashbackBox.append(cashback);

    var quentityBox = document.createElement("div");
    quentityBox.setAttribute("class", "quentityDiv")
    var form = document.createElement("form");
    var lable = document.createElement("label");
    lable.textContent = "Quantity:";

    var input1 = document.createElement("input");
    input1.setAttribute("class", "quentity");
    input1.name = "quentity";
    input1.type = "number";
    input1.step = "1";
    input1.value = "1";
    input1.min = "1";
    input1.max = "500";

    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Update";
    submit.addEventListener("click", function () {
        checkTotal(el)
    })
    form.append(lable, input1, submit)
    quentityBox.append(form);

    detailsBox.append(nameBox, priceBox, cashbackBox, quentityBox);

    var removePart = document.createElement("div");
    removePart.setAttribute("class", "removePart")

    var savebtn = document.createElement("button")
    savebtn.textContent = "Saved for later";

    var removebtn = document.createElement("button")
    removebtn.textContent = "Remove";
    removebtn.addEventListener("click", function () {
        removeItem(el,index);
    })
    removePart.append(savebtn, removebtn)



    orderTotal.append(imgbox, detailsBox, removePart)
    // document.querySelector(".orderTotal").append(imgbox, detailsBox, removePart);

    var storeTotal = document.createElement("div");
    storeTotal.setAttribute("class", "storeTotal")
    var divd = document.createElement("div");
    divd.textContent = "Store total:";

    var storeTotalAmt = document.createElement("div");
    storeTotalAmt.setAttribute("class", "storeTotalAmt");
    var amt = document.createElement("p");
    amt.textContent = `$${el.price}`
    storeTotalAmt.append(amt);

    storeTotal.append(divd, storeTotalAmt)

    box.append(shippingFrom, orderTotal, storeTotal)

    document.querySelector("#containerBox").append(box)

});

// var cartData1 = JSON.parse(localStorage.getItem("cartList"))
// console.log(cartData);
var total = cartData.reduce(function (sum, el, index, arr) {
    return sum + Number(el.price)
}, 0).toFixed(2);

localStorage.setItem("total", total);
var total = localStorage.getItem("total");
var length = cartData.length;
localStorage.setItem("length", length);
// console.log(total, length)
// var total1 = Number(tatal.toFixed(2))
document.querySelector(".tItems2").innerHTML = length
document.querySelector(".tAmt2").innerHTML = `$${total}`






function checkTotal(el) {
    var qty = document.querySelector(".quentity").value;
    console.log(qty)
    console.log(typeof qty)
    if ((Number(el.price) * (Number(qty))) < 90) {
        var curr = 90 - Number(el.price);
        curr = curr.toFixed(2);
        span2.textContent = `Add $${curr}  in Market America products to qualify for Free Shipping!`
    } else {
        span2.textContent = "Congratulations, your order qualifies for Free Shipping."
    }
}
function removeItem(el, index) {
    // console.log(el,index);
    cartData.splice(index, 1)
    console.log(cartData);
    localStorage.setItem("cartList", JSON.stringify(cartData));
    window.location.reload();
}

function checkout() {
    window.location.href = "/src/payment.html"
}
