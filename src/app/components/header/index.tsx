import { BiSolidBell, BiSolidBellRing } from "react-icons/bi";
import Input from "@/app/components/header/Input";
import Image from "next/image";
import profile from "@/app/assets/images/man.webp";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white p-2 flex justify-between">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />

        <div className="flex gap-3">
          <Image
            src={profile}
            width={40}
            height={40}
            alt="profile"
            className="object-contain"
          />

          <div>
            <p className="font-semibold">Erol Sarmaşık</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
