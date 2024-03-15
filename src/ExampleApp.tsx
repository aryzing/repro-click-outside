import { onMount } from "solid-js";

import { selectOption } from "./helpers";
import { init } from "./lib";

function handleButtonClick() {
  selectOption()
    .then(
      (option) => {
        console.log("Option selected", option);
      },
      () => {
        console.log("Option selection cancelled");
      },
    )
    .catch((error) => {
      console.error("Option selection failed", error);
    });
}

export function ExampleApp() {
  onMount(() => {
    init();
  });

  return (
    <div>
      <h1>This is the DApp</h1>
      <h2>It's a work in progress</h2>

      <p>Check out some stuff</p>

      <p>Check out some more stuff</p>

      <div>
        <button onClick={handleButtonClick}>Open option selector</button>
      </div>

      {/* The click outside detection works fine when rendering the component directly into the DOM */}
      {/* <ExampleDialog /> */}
    </div>
  );
}
