import React from "react";
import { Link } from "@nextui-org/react";
const Page_nav = () => {
  return (
    <div className="flex gap-4 container mx-auto p-2" style={{maxWidth:'1000px'}}>
      <Link href="#" underline="active" size="md">
        <span className="font-normal text-black-900">Mens</span>
      </Link>
      <Link href="#" size="md">
        <span className="font-normal text-black-900">Womens</span>
      </Link>
      <Link href="#" size="md">
        <span className="font-normal text-black-900">Kids</span>
      </Link>
      <Link href="#" size="md">
        <span className="font-normal text-black-900">Packaging</span>
      </Link>
    </div>
  );
};

export default Page_nav;
