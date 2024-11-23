"use client";
import * as Dialog from "~/src/shared/ui/Dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { JustifyBetween } from "~/src/shared/ui/JustifyBetween";
import Image from "next/image";
import { Button } from "~/src/shared/ui/button";
import { overlay } from "overlay-kit";
import { cn } from "~/src/shared/ui/cn";
import { textVariants } from "~/src/shared/ui/text";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
};

export const emptyQuestionDialog = {
  open: (value: Omit<Props, "onClose" | "isOpen">) =>
    overlay.open(({ isOpen, close, unmount }) => (
      <EmptyQuestionDialog
        isOpen={isOpen}
        onClose={() => {
          close();
          setTimeout(unmount, 1000);
        }}
        {...value}
      />
    )),
};
const EmptyQuestionDialog = (props: Props) => {
  const { onClose, isOpen, title, description, imageUrl, onClick } = props;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className=" bg-white rounded-[16px] px-4 pb-4">
          <JustifyBetween className=" mb-5 py-4">
            <Dialog.Title className={cn(" text-primaryColor1", textVariants({ variant: "display01" }))}>
              {title}
            </Dialog.Title>
            <Dialog.Close>
              <Cross2Icon />
            </Dialog.Close>
          </JustifyBetween>

          <Dialog.Description className={cn(textVariants({ variant: "headline-m" }), " text-gray-700")}>
            {description}
          </Dialog.Description>
          {imageUrl && <Image src={imageUrl} alt="image" width={240} height={128} />}
          <Button size={"lg"} className=" mt-10" onClick={onClick}>
            더 알아보기
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
