import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import type { ChartConfig } from '@/components/ui/chart'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const data = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
]
const config = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
} satisfies ChartConfig

const meta = {
  title: 'UI/Chart',
  component: ChartContainer,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof ChartContainer>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <ChartContainer config={config} className="h-64 w-full max-w-md"><BarChart data={data}><CartesianGrid vertical={false} /><XAxis dataKey="month" tickLine={false} axisLine={false} /><ChartTooltip content={<ChartTooltipContent />} /><Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} /><Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /></BarChart></ChartContainer>
  ),
}
