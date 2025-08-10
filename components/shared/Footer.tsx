import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo_2.jpg"
            alt="logo"
            width={50}
            height={30}
            className="rounded-full"
          />
        </Link>

        <p>{new Date().getFullYear()} PlanIt. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
