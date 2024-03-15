/* @refresh reload */
import { render } from "solid-js/web";

import { ExampleApp } from "./ExampleApp";

const root = document.getElementById("root");

render(() => <ExampleApp />, root!);
