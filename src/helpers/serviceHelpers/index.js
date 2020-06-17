import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/core";
import { store, actions } from '../store';
const { wishlistActions: { removeFromWishlistRequest, addToWishlistRequest } } = actions;
const useToggleWishList = ({service}) => {
  console.log('service', service)
  const { wishlist, auth: { userToken, isLoggedIn }, auth } = store.getState();
  const inWishlist = wishlist.find(wish => wish.id === service.id);
  const [isWishlisted, setIsWishlisted] = useState(inWishlist ? true : false);
  const navigation = useNavigation();
  // useEffect(() => {
  //   console.log(wishlist);

  // }, [wishlist]);
  console.log(auth)
  const isAuth = isLoggedIn && userToken;

  const toggleWishlist = () => {
    console.log('this is wishlist', inWishlist)
    console.log(isAuth)
    if(isAuth) {
      navigation.navigate("Login",  {
        redirectedBack: true,
      });
      return
    }
    
    if(inWishlist) {
      store.dispatch(removeFromWishlistRequest(service));
    } else {
      store.dispatch(addToWishlistRequest(service));
    }
    setIsWishlisted(wishlist.find(wish => wish.id === service.id ? true : false))
  };
  return { toggleWishlist, isWishlisted };
}

store.subscribe(useToggleWishList);

export { useToggleWishList }