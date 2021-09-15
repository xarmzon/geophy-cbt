import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-30 w-30">
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/assets/images/logo.png"
            height="501"
            width="491"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
