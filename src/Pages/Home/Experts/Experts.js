import React from "react";
import Expert from "../Expert/Expert";

const experts = [
  {
    id: 1,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/jwTBGhz/7.jpg",
  },
  {
    id: 2,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/VVVMKXW/6.jpg",
  },
  {
    id: 3,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/FsBDNyR/8.jpg",
  },
  {
    id: 4,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/k5z82cq/5.jpg",
  },
  {
    id: 5,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/W5Yhj9T/4.jpg",
  },
  {
    id: 6,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/6t5tc7S/3.jpg",
  },
  {
    id: 7,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/M1VR4R0/2.jpg",
  },
  {
    id: 8,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/gMxtV4t/1.jpg",
  },
  {
    id: 9,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/yFx4FQW/9.jpg",
  },
  {
    id: 10,
    name: "Replace Tire",
    price: 2000,
    time: 2,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod adipisci rem facere cumque ipsum necessitatibus, accusantium voluptatum quasi omnis iste!",
    img: "https://i.ibb.co/yFqY65H/10.jpg",
  },
];

const Experts = () => {
  return (
    <div className="container">
      <h2 className="text-primary mt-5">Our Experts</h2>
      <div className="row ">
        {experts.map((expert) => (
          <Expert expert={expert} key={expert.id}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
