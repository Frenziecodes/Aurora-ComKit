import CopyButton from "../../components/CopyButton";

function FormTwo() {
  return (
    <section className="my-4">
      <CopyButton id="#FormTwo" />
      <div className="flex flex-col md:flex-row">
        <div id="FormTwo" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800">
          <div className="container my-4 px-6 mx-auto">
            <section className="mb-3 text-gray-800 text-center lg:text-left">
              <form
                action=""
                className="bg-white border rounded-lg shadow-md p-8 max-w-md mx-auto"
              >
                <div className="mb-6">
                  <h1 className="text-2xl font-bold">Sign Up</h1>
                  <p className="text-gray-500">
                    Please fill in this form to create an account.
                  </p>
                </div>
                <hr className="mb-6" />

                <div className="mb-6">
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    required
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="psw" className="block font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="psw-repeat" className="block font-medium mb-2">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    name="psw-repeat"
                    required
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      name="remember"
                      className="mr-2"
                    />
                    <span className="text-gray-500">Remember me</span>
                  </label>
                </div>

                <div className="mb-6">
                  <p className="text-gray-500">
                    By creating an account you agree to our{" "}
                    <a href="#" className="text-blue-500">
                      Terms &amp; Privacy
                    </a>
                    .
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormTwo;
