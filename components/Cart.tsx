import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotalPrice } from "../redux/cartSlice";

const Cart = () => {
  const items = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotalPrice);

  return (
    <Link href="/checkout">
      <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        {items.length > 0 && (
          <span className="text-[10px bgGradiant absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full text-white">
            {items.length}
          </span>
        )}
        <ShoppingBagIcon className="header headerIcon h-8 w-8" />
      </div>
    </Link>
  );
};

export default Cart;
