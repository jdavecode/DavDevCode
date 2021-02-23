export const GetbasketTotalPrice = ({ basket }) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};


const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD-TO-CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(`Item not remove from shopping basket`);
      }

      return {
        ...state,
        basket: newBasket,
      };
      break;
    case "SET-USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return initialState;
  }
};
export default reducer;
