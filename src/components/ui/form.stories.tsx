import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function FormDemo() {
  const form = useForm({ defaultValues: { username: '' } })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="w-72 space-y-4">
        <FormField control={form.control} name="username" rules={{ required: 'Username is required' }} render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl><Input placeholder="shadcn" {...field} /></FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

const meta = {
  title: 'UI/Form',
  component: Form,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <FormDemo />
  ),
}
