import Head from "next/head";

export default function Footer() {
  const toggleFAQ = (name) => {
    const toggle = document.querySelector(`.${name}`);

    if (toggle.classList.contains("active")) {
      toggle.classList.remove("active");
    } else {
      toggle.classList.add("active");
    }
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
      </Head>

      <section className="relative z-20 overflow-hidden  pt-[90px] pb-[90px] bg-[#FFFEF0] text-black">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[520px] text-center lg:mb-16">
                <span className="block mb-2 text-lg font-semibold text-primary">FAQ</span>
                <div className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                  Any Questions? Look Here
                </div>
                {/*   */}
              </div>
            </div>
          </div>

          <div className="text-center mb-[60px] unselectable">
            <div>
              <div className="faqs-container text-black">
                <div className="pointer">
                  <div className="faq faq-0" onClick={(e) => toggleFAQ("faq-0")}>
                    <h3 className="faq-title  ">What is Archive Buttons?</h3>
                    <p className="faq-text text-black ">
                      Archive buttons is a collection of the top archive and remove paywall
                      websites. These are the best ways to remove the paywall on any article you may
                      want to read. The reason you may want to test out different websites is
                      because not all of them work to remove the paywall on all articles. Some
                      archive and remove paywall websites only work on some articles. However, with
                      multiple sites, there is a very good chance at least one will work to remove
                      the paywall.
                    </p>
                    <button className="faq-toggle" aria-label="Tell me more">
                      <i className="fas fa-chevron-down" />
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>

                <div className="pointer">
                  <div className="faq faq-1" onClick={(e) => toggleFAQ("faq-1")}>
                    <h3 className="faq-title">How does Archive Buttons work?</h3>
                    <p className="faq-text text-black">
                      The idea is pretty simple. We collected the top archive and remove paywall
                      websites and got them to work from one url. This way you can enter your
                      article url and find at least one website that has that article without a
                      paywall.
                    </p>
                    <button className="faq-toggle" aria-label="Why Choose Us?">
                      <i className="fas fa-chevron-down" />
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>

                <div className="pointer">
                  <div className="faq faq-3" onClick={(e) => toggleFAQ("faq-3")}>
                    <h3 className="faq-title">Is this Legal?</h3>
                    <p className="faq-text text-black">
                      Yes, this is completely legal. We direct users to third party websites that
                      remove the paywall. We are not connected to these websites. Also, archiving
                      websites are completely legal. So you can read articles without paywalls and
                      without any worries.
                    </p>
                    <button className="faq-toggle" aria-label="Share more tips">
                      <i className="fas fa-chevron-down" />
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>

                <div className="pointer">
                  <div className="faq faq-4" onClick={(e) => toggleFAQ("faq-4")}>
                    <h3 className="faq-title">What websites does it work for?</h3>
                    <p className="faq-text text-black">
                      We tested this on hundreds of the top news websites and it has not failed yet.
                      There was always at least one website that was able to remove the paywall.
                    </p>
                    <button className="faq-toggle" aria-label="Get Started">
                      <i className="fas fa-chevron-down" />
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>

                <div className="pointer">
                  <div className="faq faq-5" onClick={(e) => toggleFAQ("faq-5")}>
                    <h3 className="faq-title">Is this free?</h3>
                    <p className="faq-text text-black">
                      Absolutely! We are glad people can remove paywalls on articles and read them
                      for free. Enjoy free news!
                    </p>
                    <button className="faq-toggle" aria-label="Learn more">
                      <i className="fas fa-chevron-down" />
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>

                {/* <div className="pointer">
                  <div className="faq faq-6" onClick={(e) => toggleFAQ("faq-6")}>
                    <h3 className="faq-title">Have More Questions?</h3>
                    <p className="faq-text">
                      We're here to assist you on your travel hacking and cheap flights journey.
                      Reach out to us at adlinkbypass@gmail.com, and our team will be delighted to
                      provide you with expert guidance and support. Unleash the full potential of
                      travel hacks and embark on unforgettable adventures within your budget!
                    </p>
                    <button className="faq-toggle" aria-label="Contact us">
                      <i className="fas fa-chevron-down" />
                      <i className="fas fa-times" />
                    </button>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
