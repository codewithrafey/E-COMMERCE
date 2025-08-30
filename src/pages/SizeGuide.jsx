import React from "react";
import sizeguide_banner from "../assets/sizeguide_banner.jpg";

function SizeGuide() {
  return (
    <div>
      {/* Banner Section */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img
        loading='lazy'
          src={sizeguide_banner}
          alt="Size Guide Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col gap-4 items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            #size_guide
          </h1>
          <p className="text-white text-md">
            Find your perfect fit with our detailed size guide.
          </p>
        </div>
      </div>

      {/* Clothing Size Guide */}
      <div className="px-6 md:px-20 lg:px-40 py-10">
        <h2 className="text-2xl font-bold mb-4">Clothing Size Guide</h2>
        <p className="text-gray-600 mb-6">
          Measure around your chest, waist, and hips to find the best fit. Always choose one size up if you are in between sizes.
        </p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Size</th>
                <th className="border p-2">Chest (inches)</th>
                <th className="border p-2">Waist (inches)</th>
                <th className="border p-2">Hips (inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">S</td>
                <td className="border p-2">36 - 38</td>
                <td className="border p-2">30 - 32</td>
                <td className="border p-2">35 - 37</td>
              </tr>
              <tr>
                <td className="border p-2">M</td>
                <td className="border p-2">39 - 40</td>
                <td className="border p-2">33 - 34</td>
                <td className="border p-2">38 - 39</td>
              </tr>
              <tr>
                <td className="border p-2">L</td>
                <td className="border p-2">41 - 42</td>
                <td className="border p-2">35 - 36</td>
                <td className="border p-2">40 - 41</td>
              </tr>
              <tr>
                <td className="border p-2">XL</td>
                <td className="border p-2">43 - 45</td>
                <td className="border p-2">37 - 39</td>
                <td className="border p-2">42 - 44</td>
              </tr>
              <tr>
                <td className="border p-2">XXL</td>
                <td className="border p-2">46 - 48</td>
                <td className="border p-2">40 - 42</td>
                <td className="border p-2">45 - 47</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Shoes Size Guide */}
      <div className="px-6 md:px-20 lg:px-40 py-10">
        <h2 className="text-2xl font-bold mb-4">Shoes Size Guide</h2>
        <p className="text-gray-600 mb-6">
          Place your foot on a sheet of paper, mark the heel and the longest toe, then measure in cm to find the right size.
        </p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">EU Size</th>
                <th className="border p-2">US Size</th>
                <th className="border p-2">UK Size</th>
                <th className="border p-2">Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">39</td>
                <td className="border p-2">6</td>
                <td className="border p-2">5.5</td>
                <td className="border p-2">24.5</td>
              </tr>
              <tr>
                <td className="border p-2">40</td>
                <td className="border p-2">7</td>
                <td className="border p-2">6.5</td>
                <td className="border p-2">25.0</td>
              </tr>
              <tr>
                <td className="border p-2">41</td>
                <td className="border p-2">8</td>
                <td className="border p-2">7.5</td>
                <td className="border p-2">26.0</td>
              </tr>
              <tr>
                <td className="border p-2">42</td>
                <td className="border p-2">9</td>
                <td className="border p-2">8.5</td>
                <td className="border p-2">26.5</td>
              </tr>
              <tr>
                <td className="border p-2">43</td>
                <td className="border p-2">10</td>
                <td className="border p-2">9.5</td>
                <td className="border p-2">27.0</td>
              </tr>
              <tr>
                <td className="border p-2">44</td>
                <td className="border p-2">11</td>
                <td className="border p-2">10.5</td>
                <td className="border p-2">27.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessories Note */}
      <div className="px-6 md:px-20 lg:px-40 py-10">
        <h2 className="text-2xl font-bold mb-4">Accessories Size Guide</h2>
        <p className="text-gray-600 leading-relaxed">
          <p>Belts: Choose 2 inches larger than your waist size. </p> 
          <p>Gloves: Measure around your palm (in inches). </p> 
          <p>Watches, Bags, Wallets, Sunglasses, Cufflinks: Standard sizes, no extra measurement needed.</p>
        </p>
      </div>
    </div>
  );
}

export default SizeGuide;
