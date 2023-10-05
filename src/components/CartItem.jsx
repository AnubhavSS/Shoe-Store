import React from "react";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../../store/cartSlice";
const CartItem = ({ info }) => {
  const size = ["India-6", "India-7", "India-8", "India-9", "India-10"];
  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "qty" ? parseInt(e.target.value) : e.target.value,
      id: info?._id,
    };

    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* Image start */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image src={info?.image} alt={"Image"} width={120} height={120} />
      </div>
      {/* Image End */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Product title */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {info?.company}
          </div>

          {/* Product subtitle */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {info?.title}
          </div>

          {/* Product price */}
          <div className="text-sm md:text-md font-bold text-black/[0.8] mt-2">
            MRP : &#8377;{info?.totalAmt}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {"Hello"}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "size")}
              >
                {size.map((item) => (
                  <option
                    key={item}
                    value={item}
                    selected={item === info?.size}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Qty:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "qty")}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <option key={item} value={item} selected={item === info?.qty}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => dispatch(removeFromCart({ id: info?._id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
