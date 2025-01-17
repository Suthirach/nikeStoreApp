import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  // bigShoe1,
  bigGuitar1,
  bigGuitar2,
  bigGuitar3,
  // bigShoe2,
  // bigShoe3,
  customer1,
  customer2,
  PPGuitar4,
  PPGuitar5,
  PPGuitar6,
  PPGuitar7,
  // shoe4,
  // shoe5,
  // shoe6,
  // shoe7,
  // thumbnailShoe1,
  // thumbnailShoe2,
  // thumbnailShoe3,
  cardGuitar1,
  cardGuitar2,
  cardGuitar3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    cardGuitar: cardGuitar1,
    bigGuitar: bigGuitar1,
  },
  {
    cardGuitar: cardGuitar2,
    bigGuitar: bigGuitar2,
  },
  {
    cardGuitar: cardGuitar3,
    bigGuitar: bigGuitar3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: PPGuitar4,
    name: "AERODYNE SPECIAL JAZZ BASS®",
    price: "$999.99",
  },
  {
    imgURL: PPGuitar5,
    name: "VINTERA® II '60S STRATOCASTER®",
    price: "$1,149.99",
  },
  {
    imgURL: PPGuitar6,
    name: "AMERICAN PROFESSIONAL II STRATOCASTER®",  
    price: "1,699.99",
  },
  {
    imgURL: PPGuitar7,
    name: "PLAYER PLUS NASHVILLE TELECASTER®",
    price: "$1,029.99",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Stratocaster", link: "/" },
      { name: "Telecaster", link: "/" },
      { name: "Mustang", link: "/" },
      { name: "Jaguar", link: "/" },
      { name: "Jag-Stang", link: "/" },
      { name: "Jazzmaster", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@fender.com", link: "mailto:customer@fender.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
