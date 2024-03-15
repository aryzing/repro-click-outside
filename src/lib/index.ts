import { customElement } from "solid-element";

import { MySelector } from "./MySelector";

export const selectorId = "my-selector";

export function getSelectorElement() {
  return document.getElementById(selectorId);
}

export function init() {
  customElement("my-selector", MySelector);

  const mySelectorElement = document.createElement("my-selector");
  mySelectorElement.id = selectorId;
  document.body.appendChild(mySelectorElement);
}
