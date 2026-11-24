import type { Meta, StoryObj } from '@storybook/react-vite'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'


const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Collapsible className="w-full max-w-sm space-y-2"><div className="flex items-center justify-between"><h4 className="text-sm font-semibold">3 starred repositories</h4><CollapsibleTrigger render={<Button variant="ghost" size="sm" />}>Toggle</CollapsibleTrigger></div><div className="rounded-md border px-4 py-2 text-sm">shadcn/ui</div><CollapsibleContent className="space-y-2"><div className="rounded-md border px-4 py-2 text-sm">tailwindlabs/tailwindcss</div><div className="rounded-md border px-4 py-2 text-sm">storybookjs/storybook</div></CollapsibleContent></Collapsible>
  ),
}
