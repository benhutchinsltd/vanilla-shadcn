import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <Accordion className="w-full max-w-sm">
      <AccordionItem value="a"><AccordionTrigger>Is it accessible?</AccordionTrigger><AccordionContent>Yes. It follows the WAI-ARIA design pattern.</AccordionContent></AccordionItem>
      <AccordionItem value="b"><AccordionTrigger>Is it styled?</AccordionTrigger><AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent></AccordionItem>
      <AccordionItem value="c"><AccordionTrigger>Is it animated?</AccordionTrigger><AccordionContent>Yes. It is animated by default.</AccordionContent></AccordionItem>
    </Accordion>
  ),
}
