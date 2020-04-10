import { useState } from 'react';
import { useNavigation } from "@react-navigation/core";
import { store, actions } from '../store';

const useToggleWishList = ({ removeFromWishlist, addToWishlist, service }) => {
  const { wishlist } = store.getState();
  console.log(wishlist);
  const inWishlist = wishlist.find(wish => wish.id === service.id);
  const [isWishlisted, setIsWishlisted] = useState(inWishlist ? true : false)
  const navigation = useNavigation();

  const isLoggedIn = false;
  const token = '795899HFkjkghGcjzf';
  const auth = isLoggedIn && token;

  const toggleWishlist = () => {
    if(!auth) {
      navigation.navigate("Login",  {
        redirectedBack: true,
      });
      return
    }
    
    console.log(inWishlist);
    if(inWishlist) {
      removeFromWishlist(service.id);
      setIsWishlisted(false);
    } else {
      addToWishlist(service);
      setIsWishlisted(true);
    }
  
  };
  return { toggleWishlist, isWishlisted };
}

// store.subscribe(useToggleWishList);

export { useToggleWishList }