// 20: Clicking on "Add to cart" will update the number displayed next to the "Cart" button to show the total number of items in the user's cart
// 20: Clicking on the "Cart" button will show the cart modal with a list of all items added
// 20: Clicking on the "Clear" button in the cart modal removes all items from the cart
// 20: Clicking on the "X" button in the cart modal closes the modal
// 20: The "Total" in the cart modal shows the calculated sum of all item prices
const addCartBtns = document.querySelectorAll('li button')
const cartItemCount = document.querySelector("#cart-item-count")
const cartBtn = document.querySelector("#cart-button")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close")
const itemList = document.querySelector(".item-list")
const modalPrice = document.querySelector(".totalPrice")


closeModal.addEventListener("click", function() {
  modal.style.display = "none"
})

cartBtn.addEventListener("click", function() {
  modal.style.display = "block"
})


addCartBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {

    // add items count to cart
    let currentNum = Number(cartItemCount.textContent)
    cartItemCount.textContent = (currentNum + 1).toString()

    // adding items to modal
    let itemName = this.previousElementSibling.previousElementSibling.textContent
    let itemPrice = this.previousElementSibling.textContent
    let item = document.createElement('li')
    item.textContent = `${itemName}  ${itemPrice}`
    itemList.append(item)

    // update total price
    modalPrice.textContent = (Number(modalPrice.textContent) + Number(itemPrice.slice(1))).toFixed(2)

    // clear the modal

  })
})
