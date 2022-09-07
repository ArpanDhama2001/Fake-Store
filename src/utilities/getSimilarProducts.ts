import { ItemeState } from "../features/productsSlice";

const interestedCategories = (cart: ItemeState[]) => {
  let cat: any[] = [];
  cart.map((item) => {
    if (!cat.includes(item.category)) {
      cat.push(item.category);
    }
  });

  return cat;
};

export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const reduceTo10 = (oldArr: ItemeState[]) => {
  if (oldArr.length > 10) {
    let newArr: ItemeState[] = [];
    let i = 0;
    while (i++ < 10) {
      newArr.push(oldArr[i]);
    }
    return newArr;
  } else return oldArr;
};

const filterItems = (cart: ItemeState[], arr: ItemeState[]) => {
  let newArr: ItemeState[] = [];
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (cart[i].id !== arr[j].id) {
        // Very very important check
        // if element already exist in newArr then it well get duplicated
        if (!newArr.includes(arr[j]) && !cart.includes(arr[j])) {
          newArr.push(arr[j]);
        }
      }
    }
  }

  return newArr;
};

export const getSimilarProducts = (
  products: ItemeState[],
  cart: ItemeState[]
) => {
  let interests = interestedCategories(cart);

  let similarProducts: ItemeState[] = [];

  products.forEach((item, index) => {
    if (interests.includes(item.category)) {
      similarProducts.push(item);
    }
  });

  let finalList: ItemeState[] = [];
  finalList = filterItems(cart, similarProducts);

  finalList = reduceTo10(finalList);

  return shuffle(finalList);
};
