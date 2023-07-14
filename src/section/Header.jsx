// import React from "react";

function Header() {
  return (
    <div className="min-h-screen pt-20 px-6 flex justify-center">
      <section className="mb-12 text-gray-800 text-center max-w-[1000px]">
        <h3 className="text-2xl md:text-3xl">Get started with 𝐴𝑢𝑟𝑜𝑟𝑎 𝐶𝑜𝑚𝐾𝑖𝑡.</h3>
        <p className="mt-4 text-gray-500 text-lg text-left">
          Welcome to Aurora ComKit, your ultimate resource for free UI components built with Tailwind CSS. Our collection of
          components can help you save time and effort in developing your next project, so you can focus on what matters
          most: creating amazing user experiences. Browse our library of components and discover a world of possibilities.
        </p>

        <div className="mt-10">
          <h4 className="text-xl font-semibold mb-2">Using Aurora ComKit</h4>
          <p className="text-gray-500 text-lg text-left">
            To use the components from Aurora ComKit, you need to have Tailwind CSS installed in your project. Follow the steps
            below to install Tailwind CSS based on the language you are using:
          </p>         

          <div className="mt-6">
            <h5 className="text-lg font-semibold mb-2">Installation for HTML/CSS:</h5>
            <pre className="bg-gray-100 p-2 rounded-md">
              <code className="text-gray-700">
                npm install tailwindcss
                <br />
                <br />
                npx tailwindcss init --full
              </code>
            </pre>
          </div>

          <div className="mt-6">
            <h5 className="text-lg font-semibold mb-2">Installation for JavaScript (React, Vue, etc.):</h5>
            <pre className="bg-gray-100 p-2 rounded-md">
              <code className="text-gray-700">
                npm install tailwindcss
                <br />
                <br />
                npx tailwindcss init
              </code>
            </pre>
          </div>

        </div>

        <div className="mt-10">
          <h4 className="text-xl font-semibold mb-2">Changelog</h4>
          <p className="text-gray-500 text-lg text-left">
            Stay updated with the latest changes and improvements in Aurora ComKit. Check out the changelog below to see what is 
            new in each release:
          </p>

          <ul className="mt-4">
            <li>Version 0.1.0 - Initial release of Aurora ComKit</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Header;
