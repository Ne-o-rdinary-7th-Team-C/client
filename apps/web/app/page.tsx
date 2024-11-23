"use client";
import * as Drawer from "~/src/shared/ui/drawer";
import * as Dialog from "~/src/shared/ui/Dialog";

export default function Home() {
  return (
    <div>
      dsadas
      <Dialog.Root>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>hello</Dialog.Title>
            <Dialog.Description>hello</Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <Drawer.Root>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Title>hello</Drawer.Title>
            <Drawer.Description>hello</Drawer.Description>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
