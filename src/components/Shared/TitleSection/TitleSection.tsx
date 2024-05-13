import { Divider } from "@nextui-org/react";

export const TitleSection = ({
  classNames,
  title,
  // srcIcon,
}: {
  title: string;
  // srcIcon?: string;
  classNames: {
    divider?: string;
    base?: string;
    text?: string;
  };
}) => {
  return (
    <div className={`flex w-full items-center ${classNames.base}`}>

      <div className="flex flex-col gap-2">
        <h1 className={`text-2xl xl:text-4xl font-bold ${classNames.text}`}>{title}</h1>
        <Divider className={`h-1 ${classNames.divider}`} />
      </div>
    </div>
  );
};
