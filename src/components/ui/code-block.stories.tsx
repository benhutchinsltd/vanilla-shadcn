import type { Meta, StoryObj } from '@storybook/react-vite'
import { CodeBlock, CodeBlockActions, CodeBlockContent, CodeBlockCopyButton, CodeBlockHeader, CodeBlockTitle } from '@/components/ui/code-block'

const code = 'npx shadcn@latest add button'

const meta = {
  title: 'UI/CodeBlock',
  component: CodeBlock,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <CodeBlock className="w-full max-w-sm"><CodeBlockHeader><CodeBlockTitle>Terminal</CodeBlockTitle><CodeBlockActions><CodeBlockCopyButton value={code} /></CodeBlockActions></CodeBlockHeader><CodeBlockContent><code>{code}</code></CodeBlockContent></CodeBlock>
  ),
}

export const Destructive: Story = {
  render: () => (
    <CodeBlock variant="destructive" className="w-full max-w-sm"><CodeBlockContent><code>rm -rf ./build</code></CodeBlockContent></CodeBlock>
  ),
}
