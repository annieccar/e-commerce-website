import { faker } from "@faker-js/faker";

const products = [...Array(20)].map(() => ({
  id: faker.number.int(),
  name: faker.commerce.product(),
  price: faker.commerce.price(),
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
}));

const showProducts = (array) => {
  console.log(array);
};

showProducts(products);
