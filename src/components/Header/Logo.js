import Link from "next/link";
import Image from "next/image";
import profileImage from "@/public/images/SedonaMTB3.jpg";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image src={profileImage} alt="profile image" className="w-full h-auto rounded-full" />
      </div>
      <span className="font-bold text-xl">Denise Stark</span>
    </Link>
  );
};

export default Logo;
