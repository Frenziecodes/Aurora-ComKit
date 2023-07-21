import CopyButton from "../../components/CopyButton";

function FormThree() {
  return (
    <section className="my-4">
      <CopyButton id="#FormThree" />
      <div className="flex flex-col md:flex-row">
        <div
          id="FormThree"
          className="w-full bg-gray-100 p-4 rounded-lg text-gray-800"
        >
          <div className="container my-4 px-6 mx-auto">
            <section className="mb-3 text-gray-800 text-center lg:text-left">
              <form action="action_page.php" className="max-w-md mx-auto">
                <div className="text-center">
                  <h2 className="text-xl font-bold">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div className="mt-6 rounded-md shadow-md bg-white p-6">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    >
                      Email address
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Enter your email address"
                      name="mail"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="inline-flex items-center text-gray-700 font-bold">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-gray-600"
                        name="subscribe"
                        defaultChecked
                      />
                      <span className="ml-2">Daily Newsletter</span>
                    </label>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormThree;
