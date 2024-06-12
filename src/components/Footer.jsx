import { resourcesLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="text-lg sm:text-lg lg:text-lg text-center tracking-wide">
          <div>
              <div className="hidden lg:flex justify-center space-x-6 items-center mb-5">
            <a
              href="https://t.me/Capscyber"
              className="py-2 px-3 border rounded-md"
            >
              Order Sekarang
            </a>
            <a
              href="https://t.me/Capscyber"
              className="py-2 px-5 border rounded-md"
            >
              Contact Us
            </a>
          </div>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
