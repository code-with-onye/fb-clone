import Image from "next/image";
import {
  BeakerIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
function Header() {
  return (
    <div className=" sticky top-0 z-50 bg-white flex items-center justify-between p-2 lg:px-5 shadow-md">
      {/** Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className=" h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className=" hidden ml-2 bg-transparent outline-none flex-shrink placeholder-gray-500 md:inline-flex"
          />
        </div>
      </div>
      {/** Center */}
      <div classname="flex justify-center flex-grow">
        <div className=" flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/** Reight */}
      <div className=" flex items-center sm:space-x-2 justify-end">
        {/** Profile */}
        <p className=" whitespace-nowrap font-semibold pr-3">Onye</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
