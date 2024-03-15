import { getSelectorElement } from "./lib";

export const formatConsoleMessage = (message: string) => {
  return `[sats-connect]: ${message}`;
};

export const selectOption = () => {
  return new Promise((resolve, reject) => {
    const mySelectorElement = getSelectorElement();
    if (!mySelectorElement) {
      console.error(
        formatConsoleMessage(
          "Failed to detect the selector, aborting selection.",
        ),
      );
      reject();
      return;
    }

    function cleanup() {
      // Remove all event listeners
      window.removeEventListener("dialog_select", handleMySelectorSelectEvent);

      window.removeEventListener("dialog_cancel", handleMySelectorCancelEvent);

      window.removeEventListener("keydown", handleEscKeypress);
    }

    function handleMySelectorSelectEvent(event: CustomEvent<string>) {
      resolve(event.detail);
      cleanup();
    }

    function handleMySelectorCancelEvent() {
      reject();
      cleanup();
    }

    function handleEscKeypress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const event = new CustomEvent("dialog_close");
        window.dispatchEvent(event);
        reject();
        cleanup();
      }
    }

    window.addEventListener("dialog_select", handleMySelectorSelectEvent);

    window.addEventListener("dialog_cancel", handleMySelectorCancelEvent);

    window.addEventListener("keydown", handleEscKeypress);

    const event = new CustomEvent("dialog_open");
    window.dispatchEvent(event);
  });
};
