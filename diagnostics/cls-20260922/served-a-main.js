const productCardsContainerElement = document.querySelector("#products-list");

const currentExperimentVersion = document.body.dataset.experimentVersion || "a";

const isOptimizedExperimentVersion = currentExperimentVersion === "b";

const buildProductImagePathByExperimentVersion = (productImageFileName) => {
  if (isOptimizedExperimentVersion) {
    const optimizedProductImageFileName = productImageFileName.replace(
      /\.(jpg|jpeg|png)$/i,
      ".webp",
    );

    return `images/optimized/${optimizedProductImageFileName}`;
  }

  return `images/original/${productImageFileName}`;
};

const createProductImageElement = (product) => {
  const productImageElement = document.createElement("img");

  productImageElement.className = "product-card-image";
  productImageElement.src = buildProductImagePathByExperimentVersion(
    product.image,
  );
  productImageElement.alt = product.name;
  productImageElement.width = 600;
  productImageElement.height = 400;

  // Na versão otimizada, as imagens carregam de forma mais eficiente.
  if (isOptimizedExperimentVersion) {
    productImageElement.loading = "lazy";
    productImageElement.decoding = "async";
  }

  return productImageElement;
};

const createProductCategoryElement = (product) => {
  const productCategoryElement = document.createElement("p");

  productCategoryElement.className = "product-card-category";
  productCategoryElement.textContent = product.category;

  return productCategoryElement;
};

const createProductNameElement = (product) => {
  const productNameElement = document.createElement("h3");

  productNameElement.className = "product-card-name";
  productNameElement.textContent = product.name;

  return productNameElement;
};

const createProductPriceElement = (product) => {
  const productPriceElement = document.createElement("p");

  productPriceElement.className = "product-card-price";
  productPriceElement.textContent = product.price;

  return productPriceElement;
};

const createAddProductToCartButtonElement = () => {
  const addProductToCartButtonElement = document.createElement("button");

  addProductToCartButtonElement.className = "product-card-button";
  addProductToCartButtonElement.type = "button";
  addProductToCartButtonElement.textContent = "Adicionar ao carrinho";

  return addProductToCartButtonElement;
};

const createProductContentElement = (product) => {
  const productContentElement = document.createElement("div");

  productContentElement.className = "product-card-content";

  const productCategoryElement = createProductCategoryElement(product);
  const productNameElement = createProductNameElement(product);
  const productPriceElement = createProductPriceElement(product);
  const addProductToCartButtonElement = createAddProductToCartButtonElement();

  productContentElement.append(
    productCategoryElement,
    productNameElement,
    productPriceElement,
    addProductToCartButtonElement,
  );

  return productContentElement;
};

const createProductCardElement = (product) => {
  const productCardElement = document.createElement("article");

  productCardElement.className = "product-card";

  const productImageElement = createProductImageElement(product);
  const productContentElement = createProductContentElement(product);

  productCardElement.append(productImageElement, productContentElement);

  return productCardElement;
};

const renderProductCardsOnPage = (products) => {
  const productCardElements = products.map((product) => {
    return createProductCardElement(product);
  });

  productCardsContainerElement.append(...productCardElements);
};

const fetchProductsAndRenderCards = async () => {
  try {
    const productsResponse = await fetch("data/products.json");

    if (!productsResponse.ok) {
      throw new Error("Não foi possível carregar a lista de produtos.");
    }

    const products = await productsResponse.json();

    renderProductCardsOnPage(products);
  } catch (error) {
    productCardsContainerElement.innerHTML =
      "<p>Erro ao carregar produtos.</p>";

    console.error(error);
  }
};

fetchProductsAndRenderCards();
