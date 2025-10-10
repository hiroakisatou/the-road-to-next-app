'use client';

/**
 * DatePicker Component - React 19の新しいパターンを使用
 *
 * React 19の変更点:
 * - refが通常のプロパティとして扱えるようになった
 * - forwardRefを使わずに直接refを受け取れる
 * - よりシンプルで直感的なAPI
 *
 * 参考: https://react.dev/reference/react/useImperativeHandle
 * "Starting with React 19, ref is available as a prop. In React 18 and earlier,
 * it was necessary to get the ref from forwardRef."
 */

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useImperativeHandle, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export type ImperativeHandleFormDatePicker = {
  reset: () => void;
};

type DatePickerProps = {
  id: string;
  defaultValue: string | undefined;
  name: string;
  // React 19の新機能: refが通常のプロパティとして扱えるようになった
  // 参考: https://react.dev/reference/react/useImperativeHandle
  // "Starting with React 19, ref is available as a prop. In React 18 and earlier,
  // it was necessary to get the ref from forwardRef."
  ref?: React.Ref<ImperativeHandleFormDatePicker>;
};

const DatePicker = ({ id, defaultValue, name, ref }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date(),
  );

  useImperativeHandle(ref, () => ({
    reset: () => {
      setDate(new Date());
    },
  }));

  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    // console.log('=== handleSelect called ===');
    // console.log('Current date state:', date);
    // console.log('Selected date from Calendar:', selectedDate);

    // react-day-pickerの仕様: 同じ日付を再選択するとundefinedが返される（選択解除）
    if (selectedDate === undefined) {
      console.log('Date selection cleared - reopening calendar');
      setOpen(true); // カレンダーを再度開く
      return;
    }

    setDate(selectedDate);
    setOpen(false);
  };

  const formattedStringDate = date ? format(date, 'yyyy-MM-dd') : '';
  console.log('formattedStringDate:', formattedStringDate);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger id={id} asChild>
        <Button
          variant="outline"
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
          classNames={{
            day: 'hover:bg-yellow-400 active:bg-yellow-500 dark:hover:bg-yellow-600 dark:active:bg-yellow-700',
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
