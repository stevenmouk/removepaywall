import { Nunito } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const inter = Nunito({ subsets: ["latin"] });

export default function Nav() {
  useEffect(() => {
    const menuButton = document.getElementById("astronav-menu");

    // Function to toggle mobile navigation
    function toggleMobileNav() {
      [...document.querySelectorAll(".astronav-toggle")].forEach((el) => {
        el.classList.toggle("hidden");
      });
    }

    // Add event listener if menuButton is found
    if (menuButton) {
      menuButton.addEventListener("click", toggleMobileNav);
    }

    // Cleanup function to remove event listener on component unmount
    return () => {
      if (menuButton) {
        menuButton.removeEventListener("click", toggleMobileNav);
      }
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="max-w-screen-xl px-5 mx-auto border-b border-black md:border-none ">
        <header className="flex flex-col items-center justify-between py-5 md:flex-row">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/" className="cursor-pointer">
              <div
                className={` text-rose-500 text-xl border-[2px] border-rose-500 px-3 py-3 rounded-full ${inter.className}`}
              >
                Archive Buttons
              </div>
            </Link>
            <div className="block md:hidden">
              <button id="astronav-menu" aria-label="Toggle Menu">
                <svg
                  fill="#e2e2e2"
                  className="w-4 h-4 text-[#e2e2e2]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Toggle Menu</title>
                  <path
                    className="hidden astronav-close-icon astronav-toggle"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                  ></path>
                  <path
                    className="astronav-open-icon astronav-toggle"
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <nav className="hidden w-full mt-2 astronav-items astronav-toggle md:w-auto md:flex md:mt-0">
            <ul className="flex flex-col md:flex-row md:gap-3">
              {/*     
                         <li><Link href="/fortune-500-companies" className="flex items-center ibm py-2 text-[#e2e2e2] md:px-3 hover:text-[#ffffff]"><span>Technology</span></Link></li>  */}
            </ul>
          </nav>
          <div></div>
        </header>
      </div>
    </div>
  );
}
