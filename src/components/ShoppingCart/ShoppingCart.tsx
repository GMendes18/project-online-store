function ShoppingCart() {
  const items = [];
  return (
    <div>
      {items.length === 0 && (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      )}
    </div>
  );
}
export default ShoppingCart;
