import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-12 w-12">
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/assets/images/logo.png"
            height="310"
            width="310"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
