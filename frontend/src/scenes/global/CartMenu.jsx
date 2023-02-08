import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  resetCart,
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  // console.log(cart)
  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.price;
  }, 0);


  const checkoutOpt = () => {
    if (cart.length <= 0){
      alert("you cannot proceed to checkout with an empty cart")
      return
    }
    navigate("/checkout")
    dispatch(setIsCartOpen({}));
  }

  // useEffect(()=> {
  //   console.log(cart.length);
  //   console.log("hello");

  // })

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto">

      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">SHOPPING BAG ({cart.length})</Typography>
            <IconButton sx={{ border: "1px solid black", borderRadius: "7px" }}
              onClick={() => dispatch(setIsCartOpen())}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart?.map((item) => (
              <Box key={`${item.name}-${item.id}`}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={`http://localhost:1337${item?.image}`}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {item?.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <DeleteForeverIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item?.shortDescription}</Typography>
                    <FlexBox m="20px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        gap="5px"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon sx={{ fontSize: "16px" }} />
                        </IconButton>
                        <Typography fontWeight="bolder">{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon sx={{ fontSize: "16px" }} />
                        </IconButton>
                      </Box>
                      <Typography >
                        <CloseIcon sx={{ fontSize: "20px" }} />
                      </Typography>
                      <Typography fontWeight="bold">
                        ${item?.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Box m="20px 0" display="flex" justifyContent="space-around" >
                </Box>

                <Divider />
                <Box>
                  {
                    cart.length === 0 &&
                    <Typography fontWeight="bold">cart is empty, go hopping!</Typography>
                  }
                </Box>
              </Box>
            ))}
          </Box>
s
          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">₦{totalPrice.toFixed(2)}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                checkoutOpt()
                // navigate("/checkout");
                // dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
            <Typography sx={{
              color: "red",
              cursor: "pointer",
              fontWeight: "bolder",
              borderRadius: 0,
            }}
              onClick={() =>
                dispatch(resetCart())
              }>Empty Cart</Typography>
          </Box>
          {/* <h1 onClick={dispatch(resetCart())}>empty cart</h1> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;