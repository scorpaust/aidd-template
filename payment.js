function processPayment(order) {
  if (!order || !order.items || !Array.isArray(order.items)) {
    return { success: false, error: "Invalid order or items" };
  }

  const total = order.items.reduce((sum, item) => {
    if (item.price == null) {
      return sum; // Skip items without price
    }
    return sum + item.price;
  }, 0);

  if (total > 0) {
    return chargeCard(order.customer.card, total);
  }

  return { success: false, error: "Invalid total" };
}

function chargeCard(card, amount) {
  // Simulated payment processing
  return { success: true, transactionId: "12345" };
}

module.exports = { processPayment };