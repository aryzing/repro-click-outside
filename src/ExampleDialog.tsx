import { Dialog } from "@ark-ui/solid";
import { type JSX, createSignal, onMount } from "solid-js";

export function ExampleDialog() {
  const [isOpen, setIsOpen] = createSignal(false);
  const handleOptionClick: JSX.BoundEventHandler<
    HTMLButtonElement,
    MouseEvent
  >[0] = (option) => {
    const event = new CustomEvent("dialog_select", {
      detail: option,
      bubbles: true,
      composed: true,
    });
    window.dispatchEvent(event);
    setIsOpen(false);
  };

  const handleCancelClick: JSX.EventHandler<
    HTMLButtonElement,
    MouseEvent
  > = () => {
    const event = new CustomEvent("dialog_cancel", {
      bubbles: true,
      composed: true,
    });
    window.dispatchEvent(event);
    setIsOpen(false);
  };

  onMount(() => {
    console.log("onMount");
  });

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div>
      <div
        onClick={() => {
          setIsOpen(!isOpen());
        }}
      >
        Button
      </div>
      <Dialog.Root open={isOpen()} onOpenChange={(d) => setIsOpen(d.open)}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <ul>
              <li>
                <button onClick={[handleOptionClick, "op-1"]}>Option1</button>
              </li>
              <li>
                <button onClick={[handleOptionClick, "op-2"]}>Option2</button>
              </li>
              <li>
                <button onClick={[handleOptionClick, "op-3"]}>Option3</button>
              </li>
            </ul>
            <button onClick={handleCancelClick}>Cancel</button>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </div>
  );
}
