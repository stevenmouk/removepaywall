export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-white sm:p-6">
        <div className="max-w-screen-xl mx-auto helFont">
          <hr className="my-6 sm:mx-auto lg:my-8 " />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-[#000] sm:text-centersmallFont">
              © <span className="">Archive Buttons</span>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 ">
              {/* <a
                href="mailto:support@us500.com"
                className="text-[#000] "
                rel="noopener noreferrer"
                target="_blank"
                aria-label="email"
              >
                <svg
                  className="w-4 h-4 "
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
