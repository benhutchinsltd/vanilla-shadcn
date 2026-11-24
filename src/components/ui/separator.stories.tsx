import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from '@/components/ui/separator'


const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-sm"><div className="space-y-1"><h4 className="text-sm font-medium">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p></div><Separator className="my-4" /><div className="flex h-5 items-center gap-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div></div>
  ),
}
