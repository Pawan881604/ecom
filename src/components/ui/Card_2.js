import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export const Card_2 = () => {
  return (
    <Card
    isFooterBlurred
    radius="lg"
    className="border-none"
  >
    <Image
      alt="Woman listing to music"
      className="object-cover"
      height={200}
      src="https://nextui.org/images/hero-card.jpeg"
      width={200}
    />
    <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <p className="text-medium text-white/80">Demo</p>
     
    </CardFooter>
  </Card>
  )
}