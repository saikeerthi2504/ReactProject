export function calculateBill(cartItems, discountPercent = 0) {
  let subtotal = 0;
  cartItems.forEach(item => {
    subtotal += item.price * item.quantity;
  });
  const discount = (subtotal * discountPercent) / 100;
  const total = subtotal - discount;
  return { subtotal, discount, total };
}