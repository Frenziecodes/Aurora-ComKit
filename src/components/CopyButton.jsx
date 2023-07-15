import PropTypes from "prop-types";

function CopyButton({ id }) {
  const copyCode = () => {
    const el = document.querySelector(id);
    const codeBlock = el.querySelector("section").innerHTML;

    navigator.clipboard.writeText(codeBlock).then(
      function() {
        alert("Code copied to clipboard!");
      },
      function() {
        alert("Error copying code to clipboard.");
      }
    );
  };

  return (
    <div className="flex justify-end bg-gray-800 p-3 hover:bg-gray-700 hover:text-white transition-colors duration-300">
      <button id="copy-btn" onClick={copyCode} className="bg-slate-600 text-white hover:bg-slate-900 transition-colors duration-300 px-3 py-2 rounded-md flex items-center">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9l-5-5-5 5M17 9l0 13-12 0 0-13M7 15l5 5 5-5"></path>
        </svg>
        Copy Code
      </button>
    </div>
  );
}

CopyButton.propTypes = {
  id: PropTypes.string.isRequired
};

export default CopyButton;
