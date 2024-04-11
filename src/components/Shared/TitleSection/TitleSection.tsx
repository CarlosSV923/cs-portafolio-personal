import { Divider } from "@nextui-org/react";

export const TitleSection = ({
  classNames,
  title,
}: {
  title: string;
  classNames: {
    divider?: string;
    base?: string;
  };
}) => {
  return (
    <div className={`flex w-full items-center ${classNames.base}`}>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-2xl xl:text-4xl font-bold">{title}</h1>
        <Divider className={`bg-cyan-400 h-1 ${classNames.divider}`} />
      </div>
    </div>
  );
};
