import type { Meta, StoryObj } from '@storybook/react-vite'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'


const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="px-12"><Carousel className="w-full max-w-xs"><CarouselContent>{Array.from({ length: 5 }, (_, i) => (<CarouselItem key={i}><Card><CardContent className="flex aspect-square items-center justify-center p-6 text-4xl font-semibold">{i + 1}</CardContent></Card></CarouselItem>))}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel></div>
  ),
}
