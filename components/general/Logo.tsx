import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-20 w-20">
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/assets/images/logo.png"
            height="301"
            width="291"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
