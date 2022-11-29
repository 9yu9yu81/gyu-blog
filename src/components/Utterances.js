import { memo } from "react";

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return;
        }
        const scriptElement = document.createElement("script");
        scriptElement.src = "https://utteranc.es/client.js";
        scriptElement.async = true;
        scriptElement.setAttribute("repo", "9yu9yu81/gyu-blog");
        scriptElement.setAttribute("issue-term", "pathname");
        scriptElement.setAttribute("theme", "preferred-color-scheme");
        scriptElement.crossOrigin = "anonymous";
        elem.appendChild(scriptElement);
      }}
    />
  );
}

export default memo(Utterances);
