import React from "react";
import { DropDownInput } from "../atoms";
import useGetFriends from "../../hooks/common/useGetFriends";
import { useSelector } from "react-redux";

const FriendInputDropDown = ({ input, setInput, ...props }) => {
  const wallet = useSelector((state) => state.login.user.wallet);

  const { friends } = useGetFriends(wallet);
  const result = friends.filter((option) =>
    option.walletAddress.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <DropDownInput
      input={input}
      setInput={setInput}
      placeholder="請輸入對方錢包地址"
      selectClass="max-h-[130px] overflow-auto"
      {...props}
    >
      {(onSelect) =>
        result.map((option) => (
          <li
            key={option.walletAddress}
            className="p-2 hover:bg-gray-200 cursor-pointer flex items-center"
            onClick={() => onSelect(option.walletAddress)}
          >
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={option.photo}
              alt="friendPhoto"
            />
            <div className="ml-2">
              <p className="text-xl font-medium">{option.name || " "}</p>
              <p className="mt-1">{option.walletAddress}</p>
            </div>
          </li>
        ))
      }
    </DropDownInput>
  );
};
export default FriendInputDropDown;
