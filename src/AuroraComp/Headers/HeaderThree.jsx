import CopyButton from "../../components/CopyButton";

function HeaderThree() {
  return (
    <section className="my-4">
      <CopyButton id="#HeaderThree" />
      <div className="flex items-center justify-between">
        <div id="code-3" className="bg-gray-100 p-2 rounded-lg text-gray-800">
          <div className="container my-6 px-6 mx-auto">
            <section className="mb-3 text-gray-800 background-radial-gradient">
              <style>
                {`.background-radial-gradient {
                  background-color: hsl(218, 41%, 15%);
                  background-image: radial-gradient(650px circle at 0% 0%,
                    hsl(218, 41%, 35%) 15%,
                    hsl(218, 41%, 30%) 35%,
                    hsl(218, 41%, 20%) 75%,
                    hsl(218, 41%, 19%) 80%,
                    transparent 100%),
                    radial-gradient(1250px circle at 100% 100%,
                    hsl(218, 41%, 45%) 15%,
                    hsl(218, 41%, 30%) 35%,
                    hsl(218, 41%, 20%) 75%,
                    hsl(218, 41%, 19%) 80%,
                    transparent 100%);
                }`}
              </style>

              <div className="px-6 py-4 md:px-12 text-center lg:text-left">
                <div className="container mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="mt-12 lg:mt-0">
                      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                          style={{ color: "hsl(218, 81%, 95%)" }}>
                        Are you ready <br /><span style={{ color: "hsl(218, 81%, 75%)" }}>for an adventure?</span>
                      </h1>
                      <p className="text-lg" style={{ color: "hsl(218, 81%, 95%)" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima officia consequatur
                        adipisci tenetur repudiandae rerum quos.
                      </p>
                    </div>
                    <div className="mb-12 lg:mb-0">
                      <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                          style={{ paddingTop: "56.25%" }}>
                        <iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                          allowFullScreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderThree;
