import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { theme } from "../src/theme"
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './redux/CartSlice';

const store = configureStore({
  reducer: { cart: CartReducer }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// import Img1 from "../../assets/car-1.jpeg"
// import Img2 from "../../assets/car-2.jpeg"
// import Img3 from "../../assets/car-3.jpeg"
// import Img4 from "../../assets/car-4.jpeg"
// import Img5 from "../../assets/car-5.jpeg"

// const MainCarousel = () => {

//   const photos = [
//       {
//           src: Img1
//       },
//       {
//           src: Img2
//       },
//       {
//           src: Img3
//       },
//       {
//           src: Img4
//       },
//       {
//           src: Img5
//       },
//   ];