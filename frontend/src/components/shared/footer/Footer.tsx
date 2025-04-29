import { Facebook, Instagram, X } from "lucide-react";
import Link from "next/link";
import Logo from "../logo/Logo";

const Footer = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/testimonial", label: "Testimonial" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook },
    { href: "#", icon: Instagram },
    { href: "#", icon: X },
  ];
  return (
    <footer className="border-t border-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center space-x-2">
            <Logo src="footer" />
          </div>
          <p className="text-secondary-foreground mt-3 w-1/2">
            Save big this Black Friday with unbeatable deals on reasonable
            prices.
          </p>
        </div>

        <hr />
        <ul className="flex justify-center space-x-6 text-sm text-gray-400 font-medium my-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-primary">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center space-x-4">
          {socialLinks.map(({ href, icon: Icon }, index) => (
            <Link
              href={href}
              key={index}
              className="text-gray-600 hover:text-primary"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <p className=" text-xs uppercase text-muted-foreground">
            © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME}
            <span className="align-super text-[7px]"> TM </span>
            {process.env.NEXT_PUBLIC_MOTHER_COMPANY}
            <span className="align-super text-[7px]"> TM</span>. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
