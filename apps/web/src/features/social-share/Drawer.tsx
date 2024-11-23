import * as Drawer from "~/src/shared/ui/drawer";
import { Flex } from "~/src/shared/ui/flex";
import { JustifyBetween } from "~/src/shared/ui/JustifyBetween";
import { Text } from "~/src/shared/ui/text";
import Image from "next/image";
import { Stack } from "~/src/shared/ui/Stack";
import { overlay } from "overlay-kit";

const SOCIAL_SHARE_LIST = [
  { src: "/icons/instagram.webp", label: "인스타그램" },
  { src: "/icons/kakaotalk.webp", label: "카카오톡" },
  { src: "/icons/message.webp", label: "메세지" },
  { src: "/icons/facebook.webp", label: "페이스북" },
  { src: "/icons/mail.webp", label: "메일" },
];

export const SocialDrawer = (props: { isOpen: boolean; onClose: () => void; link: string }) => {
  const { isOpen, onClose, link } = props;
  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content className=" h-[290px] px-[16px] py-[16px]">
          <JustifyBetween>
            <Drawer.Title asChild>
              <Text variant={"display01"} className=" text-gray-700">
                공유하기
              </Text>
            </Drawer.Title>
          </JustifyBetween>
          <div className=" w-full my-[16px] h-[0.5px] bg-gray-100" />
          <Drawer.Description className=" sr-only">SNS로 공유하기</Drawer.Description>
          <Flex className=" gap-[16px]">
            {SOCIAL_SHARE_LIST.map((item) => (
              <Stack className=" gap-y-[8px] items-center justify-center" key={item.label}>
                <Image src={item.src} alt={item.label} width={48} height={48} />
                <Text variant={"body01"} className=" text-gray-600">
                  {item.label}
                </Text>
              </Stack>
            ))}
          </Flex>
          <div className=" w-full my-[16px] h-[0.5px] bg-gray-100" />
          <button className=" transition-all duration-200 active:scale-[0.99] w-full flex  gap-[16px] items-center">
            <Image src={"/icons/copylink.webp"} alt="링크복사" width={48} height={48} />
            <Text variant={"headline-m"} className=" text-gray-500">
              링크 복사
            </Text>
          </button>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export const socialDrawer = {
  open: (props: { link: string }) =>
    overlay.open(({ isOpen, close, unmount }) => (
      <SocialDrawer
        isOpen={isOpen}
        onClose={() => {
          close();
          setTimeout(unmount, 1000);
        }}
        link={props.link}
      />
    )),
};
