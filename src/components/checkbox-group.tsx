'use client';

import React from 'react';

import CheckboxItem from '@/ui/checkbox-item';
import { Button } from '@/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/ui/input-group';
import { X } from 'lucide-react';

import type { ClassProps, CheckboxOption } from '@/types/global';
import { cn } from '@/lib/utils';

interface CheckboxGroupProps extends ClassProps {
  items: CheckboxOption[];
  limit?: number;
  placeholder?: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  className,
  items,
  limit = 5,
  placeholder = 'Search...'
}) => {
  const [displayedItems, setDisplayedItems] = React.useState(() => items.slice(0, limit));
  const [inputVisibility, setInputVisibility] = React.useState(false);
  const [inputText, setInputText] = React.useState('');

  function switchDisplayMode() {
    if (items.length === displayedItems.length) {
      setInputVisibility(false);
      setDisplayedItems(items.slice(0, limit));
      setInputText('');
      return;
    }
    setInputVisibility(true);
    setDisplayedItems(items);
  }

  function filterItems(value: string) {
    setInputText(value);
  }

  function clearInput() {
    if (!inputText.trim()) return;

    setInputText('');
  }

  React.useEffect(() => {
    if (inputText.trim()) {
      const clearInputText = inputText.trim().toLowerCase();
      const filteredItems = items.filter((item) => item.text.toLowerCase().includes(clearInputText));
      setDisplayedItems(filteredItems);
      return;
    }
    setDisplayedItems(items.slice(0, limit));
  }, [inputText, items, limit]);

  return (
    <div className={cn('flex max-h-96 flex-col gap-2 overflow-y-auto pl-1', className)}>
      {inputVisibility && (
        <div className="pt-1 pr-2">
          <InputGroup>
            <InputGroupInput
              value={inputText}
              onChange={(e) => filterItems(e.target.value)}
              placeholder={placeholder}
            />
            <InputGroupAddon align="inline-end">
              {inputText.trim() && <X onClick={clearInput} className="cursor-pointer" />}
            </InputGroupAddon>
          </InputGroup>
        </div>
      )}
      {displayedItems.map(({ value, text }) => (
        <CheckboxItem key={value} id={value} value={value} text={text} />
      ))}
      {items.length > limit && !inputText.trim() && (
        <Button onClick={switchDisplayMode} variant="link" className="w-fit p-0 font-medium text-red-700">
          {items.length === displayedItems.length ? '- Hide' : '+ Show all'}
        </Button>
      )}
    </div>
  );
};

export default CheckboxGroup;
