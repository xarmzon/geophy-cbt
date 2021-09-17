import Image from "next/image";
import Link from "next/link";

export type SizeType = "small" | "large";
export interface LogoProps {
  size?: SizeType;
  children?: React.ReactNode;
}
const Logo = ({ size = "small" }: LogoProps) => {
  return (
    <div className={`${size === "small" ? "h-16 w-16" : "h-24 w-24"}`}>
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/assets/images/logo.png"
            height={`${size === "small" ? "310" : "510"}`}
            width={`${size === "small" ? "310" : "510"}`}
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
