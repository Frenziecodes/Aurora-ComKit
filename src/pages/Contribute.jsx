/* eslint-disable react/no-unescaped-entities */

function Contribute() {
  return (
    <section className="min-h-screen pt-20 px-6 flex justify-center">
      <div className="mb-12 text-gray-800 text-center max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contribute to Aurora ComKit</h2>
        <p className="text-lg text-gray-600 mb-8">
          We appreciate your interest in contributing to Aurora ComKit! Your contributions help make the library better for
          everyone. There are several ways you can contribute:
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">Reporting Issues</h3>
        <p className="text-lg text-gray-600 mb-6">
          If you encounter any bugs, issues, or have feature requests, please report them on our <a href="https://github.com/Frenziecodes/Aurora-ComKit/issues" className="underline">GitHub repository.</a>  Include
          detailed information about the problem, steps to reproduce it, and any relevant code snippets or screenshots.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">Submitting Pull Requests</h3>
        <p className="text-lg text-gray-600 mb-6">
          We welcome pull requests for bug fixes, improvements, and new features. If you'd like to contribute code, please
          follow these steps:
        </p>
        <ol className="text-lg text-gray-600 text-left mb-6">
          <li>Fork the Aurora ComKit <a href="https://github.com/Frenziecodes/Aurora-ComKit" className="underline">repository</a> on GitHub.</li>
          <li>Create a new branch for your changes.</li>
          <li>Make your changes, ensuring that your code follows the project's coding style.</li>
          <li>Commit and push your changes to your forked repository.</li>
          <li>Create a pull request on the original Aurora ComKit repository, describing your changes in detail.</li>
          <li>Wait for feedback and discussion on your pull request. Make any necessary updates as requested.</li>
          <li>Once your pull request is approved, it will be merged into the main repository.</li>
        </ol>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">Contributing to Documentation</h3>
        <p className="text-lg text-gray-600 mb-6">
          If you're interested in improving the documentation, you can make updates to the documentation files directly or
          suggest improvements via pull requests.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">Spreading the Word</h3>
        <p className="text-lg text-gray-600 mb-6">
          You can also contribute by spreading the word about Aurora ComKit. Share it with your friends, colleagues, and on
          social media platforms to help others discover the library and benefit from its components.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-4">Giving a Star</h3>
        <p className="text-lg text-gray-600 mb-6">
          If you find Aurora ComKit useful, we would appreciate it if you could give the project a star on GitHub. It helps
          increase its visibility and encourages more developers to discover and use the library.
        </p>

        <p className="text-lg text-gray-600">
          Thank you for considering contributing to Aurora ComKit! Your contributions, whether it's reporting issues, submitting
          pull requests, improving documentation, spreading the word, or giving a star, are all valuable and greatly
          appreciated.
        </p>
      </div>
    </section>
  );
}

export default Contribute;
