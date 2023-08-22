
let totalPrices = 0;
let total = 0;

function handalClickBtn(target) {
    console.log(target.childNodes);

    const itemContainer = document.getElementById('items-id');
    const itemName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;

    itemContainer.appendChild(li);

    const price = parseInt(target.childNodes[7].innerText);
    total += price;
    document.getElementById('total').innerText = total;

  
    const purchaseButton = document.getElementById('btn');
    purchaseButton.disabled = total <= 0;
    
    
    if(total >= 200){
        document.getElementById('apply-btn').removeAttribute("disabled")

    }
  
    
}
function copponApply(){
    const copunCode =document.getElementById('cupon');
    const coponCodeValue = copunCode.value;
    document.getElementById('cupon').value = " ";
    console.log(coponCodeValue)
    const totalPrice = document.getElementById('total').innerText ;
    let totalPriceValue = parseFloat(totalPrice)

    if(coponCodeValue === "SELL200"){
  
    const discount = parseInt(totalPriceValue * 0.2);
    console.log(discount);
    document.getElementById('discount-price').innerText = discount;
    // console.log(totalValue,discount)
    totalPriceValue = totalPriceValue - discount;
    document.getElementById('total-price').innerText = totalPriceValue ;
    }


}
const goHome = document.getElementById('go-home');
goHome.addEventListener('click',function(){
    window.location.reload(false);
})




