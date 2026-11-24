import type { Meta, StoryObj } from '@storybook/react-vite'
import { Trace, TraceDescription, TraceIcon, TraceLine, TraceTitle } from '@/components/ui/trace'
import { Check } from 'lucide-react'


const meta = {
  title: 'UI/Trace',
  component: Trace,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Trace>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Trace className="w-96"><TraceLine><TraceIcon><Check /></TraceIcon><TraceTitle>Searched the web</TraceTitle><TraceDescription>3 results</TraceDescription></TraceLine><TraceLine status="running"><TraceTitle>Reading documentation</TraceTitle></TraceLine><TraceLine status="pending"><TraceTitle>Writing summary</TraceTitle></TraceLine></Trace>
  ),
}
