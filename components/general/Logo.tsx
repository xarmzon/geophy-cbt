import Image from "next/image";
import Link from "next/link";

export type SizeType = "small" | "large" | "text";
export interface LogoProps {
  size?: SizeType;
  children?: React.ReactNode;
}
const Logo = ({ size = "text" }: LogoProps) => {
  return (
    <div
      className={`${
        size === "small"
          ? "h-16 w-16"
          : size === "large"
          ? "font-bold text-5xl text-white"
          : "font-bold text-2xl text-white"
      }`}
    >
      <Link href="/">
        <a>MubzyCBT</a>
      </Link>
    </div>
  );
};

export default Logo;
