import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
}

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <CalendarDemo />
  ),
}
