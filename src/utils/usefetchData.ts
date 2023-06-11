import { faker } from '@faker-js/faker';


type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
}[]
const usefetchData = () => {
    const products : Product = [];

  for (let i = 0; i < 80; i++) {
    
    products.push(
      {
        id: faker.string.numeric(),
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        image: faker.image.urlLoremFlickr({ category: 'clothes' }),
        rating: Math.floor(Math.random() * 5) + 1,
      }
    );
  }
  return products;

}

export default usefetchData