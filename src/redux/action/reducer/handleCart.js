
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],  // تحميل السلة من الـ localStorage
  };
  
  const handleCart = (state = initialState, action) => {
    let newState;
  
    switch (action.type) {
      case "ADDITEM":
        const exist = state.cart.find((x) => x.id === action.payload.id);
        if (exist) {
          newState = {
            ...state,
            cart: state.cart.map((x) =>
              x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
            ),
          };
        } else {
          newState = {
            ...state,
            cart: [
              ...state.cart,
              {
                ...action.payload,
                qty: 1,
              },
            ],
          };
        }
        // حفظ التحديث في الـ localStorage بعد إضافة عنصر
        localStorage.setItem('cart', JSON.stringify(newState.cart));
        return newState;
  
      case "DELITEM":
        const exist1 = state.cart.find((x) => x.id === action.payload.id);
        if (exist1.qty === 1) {
          newState = {
            ...state,
            cart: state.cart.filter((x) => x.id !== action.payload.id),
          };
        } else {
          newState = {
            ...state,
            cart: state.cart.map((x) =>
              x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
            ),
          };
        }
        // حفظ التحديث في الـ localStorage بعد حذف عنصر
        localStorage.setItem('cart', JSON.stringify(newState.cart));
        return newState;
  
      default:
        return state;
    }
  };
  
  export default handleCart;
  