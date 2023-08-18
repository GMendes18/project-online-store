export async function getCategories() {
  const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await requestCategories.json();
  return data;
}

export async function
getProductsFromCategoryAndQuery(categoryId?: string, query?: string) {
  let Url;

  if (!query) Url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  else if (!categoryId) Url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else Url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  const response = await fetch(Url);
  const data = await response.json();
  return data;
}

export async function getProductById(productId: string) {
  const response = fetch(`https://api.mercadolibre.com/items/${productId}`);
  return (await response).json();
}
