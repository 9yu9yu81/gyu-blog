import SyntaxHighlighter from "react-syntax-highlighter";
import { rainbow } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CopyButton = ({ target }) => {
  const handleCopy = async () => {
    if (target) {
      try {
        await navigator.clipboard.writeText(target);
      } catch (error) {
        alert(`copy failed ${error}`);
      }
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute bg-gray-100 dark:bg-gray-700 px-3 rounded-lg m-1 right-0">
      Copy
    </button>
  );
};

export default function CodeBlock({ children }) {
  return (
    <div className="relative">
      <CopyButton target={children} />
      <SyntaxHighlighter showLineNumbers style={rainbow}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
