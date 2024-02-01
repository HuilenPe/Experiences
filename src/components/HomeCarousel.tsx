import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function HomeCarousel() {
  const totalImages = 10
  return (
    <div className='container mx-auto' >
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {Array.from({ length: totalImages }).map((_, index) => (
            <CarouselItem key={index} className="pl-1 sm:basis-1/10 md:basis-1/2 lg:basis-1/4">
              <div className="p-0.5">
                <Card>
                  <CardContent className="flex items-center justify-center p-0">
                    <img
                      src={`../public/imgs/Frame${index + 1}.png`}
                      alt={`Imagen ${index + 1}`}
                      className='w-full h-full object-fill rounded-md'
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
