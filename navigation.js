import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import OrderCompleted from "./screens/OrderCompleted";
import LoginScreen from './screens/LoginScreen';
import HomeChef from './screens/HomeChef';
import SignupScreen from './screens/SignupScreen';
import Forgetpassword from './screens/Forgetpassword';
import SearchHistory from "./screens/SearchHistory";
import OrderHistory from "./screens/OrderHistory";
import UserAccount from "./screens/UserAccount";
import Pickup from "./screens/Pickup";
import Softdrinks from "./screens/Softdrinks";
import Bakery from "./screens/Bakery";
import CoffeeTea from "./screens/CoffeeTea";
import Deals from "./screens/Deals";
import Desserts from "./screens/Desserts";
import Fastfood from "./screens/Fastfood";
import VerifyEmail from "./screens/VerifyEmail";
import Aboutus from "./screens/Aboutus";

const store = configureStore();


