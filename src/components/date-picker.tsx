'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

type DatePickerProps = {
  id: string;
  defaultValue: string | undefined;
  name: string;
};

const DatePicker = ({ id, defaultValue, name }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date(),
  );

  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };

  const formattedStringDate = date ? format(date, 'yyyy-MM-dd') : '';

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger id={id} asChild>
        <Button
          variant="outline"
          defaultValue={defaultValue}
          name={name}
          className="justify-start text-left font-normal border-neutral-200 dark:border-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          <CalendarIcon className="mr-2 size-4" />
          {formattedStringDate}
          <input type="hidden" name={name} value={formattedStringDate} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white dark:bg-black border-neutral-200 dark:border-neutral-700 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/30`">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus={true}
        />
      </PopoverContent>
    </Popover>
  );
};
export { DatePicker };
