import { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProductCard from '@/ui/product-card';

type StoryProps = React.ComponentProps<typeof ProductCard>;

const meta: Meta<StoryProps> = {
  component: ProductCard
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Card: Story = {
  args: {
    name: 'Ham And Cheese',
    description: 'Smoked ham, mozzarella and light creamy base.',
    price: 9,
    href: `products/30`,
    image: '/pizza/traditional/ham-and-cheese.png'
  },
  render: (args) => <ProductCard {...args} />
};
