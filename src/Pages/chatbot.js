import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import avatar from "./img.png";

const steps = [
  {
    id: "0",
    message: "Welcome to CarSelecta!",
    trigger: "username",
  },
  {
    id: "username",
    message: "Could you please tell me your name?",
    trigger: "getName",
  },
  {
    id: "getName",
    user: true,
    trigger: "mainMenu",
  },
  {
    id: "mainMenu",
    message: "Hi {previousValue}, how may I assist you today?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: 1, label: "Car Information", trigger: "carInfo" },
      { value: 2, label: "Technical Support", trigger: "Support" },
      { value: 3, label: "Contact Us", trigger: "contact" },
      { value: 4, label: "Explore More", trigger: "moreOptions" }, // New option
    ],
  },
  {
    id: "carInfo",
    message: "Would you like to know about our latest cars or offers?",
    options: [
      { value: "latest", label: "Latest Cars", trigger: "latestCars" },
      { value: "offers", label: "Special Offers", trigger: "specialOffers" },
      { value: "back", label: "Go Back", trigger: "mainMenu" },
    ],
  },
  {
    id: "latestCars",
    message:
      "You can check our latest cars on our website by clicking on the link below.",
    trigger: "carInfo",
    component: <Link to="/AboutUs">Click here to view our latest cars</Link>,
  },
  {
    id: "specialOffers",
    message:
      "Find special offers on our website by clicking on the link below.",
    trigger: "carInfo",
    component: <Link to="/AboutUs">Click here to view our special offers</Link>,
  },
  {
    id: "Support",
    message: "What issue are you facing?",
    options: [
      { value: "login", label: "Login Issues", trigger: "loginIssues" },
      { value: "search", label: "Search Issues", trigger: "searchIssues" },
      { value: "back", label: "Go Back", trigger: "mainMenu" },
    ],
  },
  {
    id: "loginIssues",
    component: (
      <span>
        For login issues, please contact our support at{" "}
        <a href="mailto:support@carselecta.com">support@carselecta.com</a>.
      </span>
    ),
    trigger: "Support",
  },
  {
    id: "searchIssues",
    message:
      "For search-related issues, please clear your cache or try again later.",
    trigger: "Support",
  },
  {
    id: "contact",
    message:
      "You can reach us at contact@carselecta.com or call us at +1234567890.",
    trigger: "mainMenu",
  },
  {
    id: "moreOptions",
    message: "Great! Here are some more options for you:",
    options: [
      {
        value: "findCar",
        label: "Find a Car Under Budget",
        trigger: "findCar",
      },
      { value: "userReviews", label: "User Reviews", trigger: "userReviews" },
      { value: "back", label: "Go Back", trigger: "mainMenu" },
    ],
  },
  {
    id: "findCar",
    message:
      "You can find a car under your budget on our website by clicking on the link below.",
    trigger: "moreOptions",
    component: (
      <Link to="/findcarunderbudget">
        Click here to find a car under your budget
      </Link>
    ),
  },
  {
    id: "userReviews",
    message:
      "Read reviews from other users on our website by clicking on the link below.",
    trigger: "moreOptions",
    component: <Link to="/userreviews">Click here to read user reviews</Link>,
  },
];

const theme = {
  background: "#e1e9f0",
  headerBgColor: "#8b459e",
  headerFontSize: "20px",
  botBubbleColor: "#8b459e",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#d9b6ff",
  userFontColor: "black",
};

const config = {
  botAvatar: avatar,
  floating: true,
};

function CarSelectaChatbot() {
  return (
    <div className="floating-chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="CarSelecta Support" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
}

export default CarSelectaChatbot;
