import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type RoomImageCarouselProps = {
  images: string[] | null;
  name: string;
};

function RoomImageCarousel({ images, name }: RoomImageCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images?.map((image, index) => (
          <CarouselItem key={index} className="flex">
            <Image
              className="w-full object-cover object-center"
              key={index}
              src={image}
              alt={name}
              width={520}
              height={200}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default RoomImageCarousel;
