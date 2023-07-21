import CopyButton from "../../components/CopyButton";

function FormOne() {
  return (
    <section className="my-4 lg:w-[1200px]">
      <CopyButton id="#FormOne" />
      <div className="flex flex-col md:flex-row">
        <div id="FormOne" className="w-full bg-gray-100 p-4 rounded-lg text-gray-800">
          <div className="container my-4 px-6 mx-auto">
            <section className="mb-3 text-gray-800 text-center lg:text-left">
              <form
                action=""
                method="post"
                className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto"
              >
                <div className="flex justify-center mb-6">
                  <div className="rounded-full overflow-hidden w-32 h-32">
                    <img
                      src="https://i.pinimg.com/474x/fb/c2/fd/fbc2fd7a937e6a5c1a0ed18ebfac9f0c.jpg"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="uname"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="psw"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                    Login
                  </button>
                  <div className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      name="remember"
                      className="form-checkbox h-4 w-4 text-blue-500"
                    />
                    <span className="ml-2 text-gray-700">Remember me</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="container text-center">
                    <span className="psw ml-3">
                      Forgot{" "}
                      <a href="#" className="text-blue-500 hover:text-blue-800">
                        password?
                      </a>
                    </span>
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

export default FormOne;
