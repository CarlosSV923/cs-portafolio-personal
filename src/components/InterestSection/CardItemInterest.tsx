import { Interest } from "@/models/data.model";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link,
} from "@nextui-org/react";
import NextImage from "next/image";

export const CardItemInterest = ({ interest }: { interest: Interest }) => {
  return (
    <Card
      shadow="sm"
      fullWidth
      className="w-full md:w-5/12 xl:w-1/4 p-2 h-max bg-gray-800"
    >
      <CardHeader className="flex flex-col item-center justify-center gap-4">
        {/* <div className="flex flex-col w-full"> */}
        {interest.name && (
          <h3 className="text-cyan-400 text-lg font-bold">{interest.name}</h3>
        )}
        {interest.description && (
          <p className="text-white text-md">{interest.description}</p>
        )}
        {/* </div> */}
      </CardHeader>
      <CardBody className="flex flex-col justify-center item-center gap-4">
        <Image
          as={NextImage}
          src={interest.image || "/default_bgProject.png"}
          fallbackSrc="/default_bgProject.png"
          alt={interest.name}
          width={550}
          height={800}
          isZoomed
          loading="eager"
        />
      </CardBody>
      {
        interest.url && (
          <CardFooter className="flex flex-col item-center justify-center gap-4">
            <Link
              className="text-white text-md hover:text-cyan-400"
              isExternal
              showAnchorIcon
              href={interest.url}
            >
              {"Ver sitio"}
            </Link>
          </CardFooter>
        )
      }
    </Card>
  );
};
