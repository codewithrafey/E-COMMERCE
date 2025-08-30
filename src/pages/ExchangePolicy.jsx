import React from "react";
import exchange_banner from "../assets/exchange_banner.jpg";

function ExchangePolicy() {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img loading='lazy' src={exchange_banner} alt="Exchange Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col gap-4 items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold">#exchange_policy</h1>
          <p className="text-white text-md">
            Hassle-free returns & exchanges for your convenience.
          </p>
        </div>
      </div>

      {/* Policy Section */}
      <div className="py-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-black space-y-6">
        <h2 className="text-3xl font-bold mb-4">Our Return & Exchange Policy</h2>
        <p>
          We want you to be completely satisfied with your purchase. If for any reason you are not
          happy with your order, we offer an easy return and exchange process.
        </p>

        <h3 className="text-2xl font-semibold">Eligibility</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Items must be returned within <b>7 days</b> of delivery.</li>
          <li>Products must be unused, unwashed, and in original condition with tags attached.</li>
          <li>Sale or discounted items may not be eligible for return.</li>
        </ul>

        <h3 className="text-2xl font-semibold">How to Request a Return/Exchange?</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Contact our customer support via email or phone.</li>
          <li>Provide your order number and reason for return/exchange.</li>
          <li>Our team will guide you with the return shipping process.</li>
        </ol>

        <h3 className="text-2xl font-semibold">Refunds</h3>
        <p>
          Refunds will be processed once the returned product is inspected. Refunds may take 5–7
          working days to appear in your account.
        </p>

        <h3 className="text-2xl font-semibold">Important Notes</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Shipping charges are non-refundable.</li>
          <li>Exchange is subject to product availability.</li>
          <li>Customized or personalized items are not eligible for return.</li>
        </ul>
      </div>
    </div>
  );
}

export default ExchangePolicy;