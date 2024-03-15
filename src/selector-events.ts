export {};

// Allow adding custom event listeners to the window object.
declare global {
  interface WindowEventMap {
    "dialog_select": CustomEvent<string>;
    "dialog_cancel": CustomEvent;
    "dialog_open": CustomEvent;
    "dialog_close": CustomEvent;
  }
}
