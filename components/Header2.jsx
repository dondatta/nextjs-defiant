import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
  return (
    <header className="py-150 color fixed z-10 my-4 flex justify-between px-4 md:px-12 bg-white w-full">
      <div>DEFIANT</div>
      <Image
        width={100}
        height={100}
        src="https://res.cloudinary.com/dnjadkrvy/image/upload/v1675045940/logo_ex1aid.svg"
      />
      
      <GiHamburgerMenu />

    </header>
  );
}
