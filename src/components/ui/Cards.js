import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { RatingComponent } from "./RatingComponent";

const Cards = () => {
  return (
    // <Link href="#">
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-xl">CLASSIC MUST-HAVES!</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://nextui.org/images/card-example-6.jpeg"
      />
      <CardFooter className="absolute custom-card bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white text-tiny">
            roadies rd-209-c2 cat-eye sunglasses uv400 protection .
          </p>
          <p className="text-white text-tiny">Get notified.</p>
        </div>
        <div className="absolute -top-7 right-3 ">
          <FaHeart
            className="cursor-pointer text-white"
            style={{ fontSize: "40px" }}
          />
        </div>
        <RatingComponent/>
      </CardFooter>
    </Card>
  );
};

export default Cards;
