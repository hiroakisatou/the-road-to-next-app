import Form from 'next/form';
import { useId } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { upsertTicket } from '@/futures/actions/upsert-tickets';
import type { Ticket } from '@/futures/ticket/types';

type TicketUpdateFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpdateFormProps) => {
  const titleId = useId();
  const contentId = useId();

  return (
    <Form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-4 p-6 rounded-lg "
    >
      <div className="flex flex-col gap-y-2">
        <Label htmlFor={titleId} className="text-neutral-900 dark:text-white">
          Title
        </Label>
        <Input
          id={titleId}
          defaultValue={ticket?.title}
          name="title"
          type="text"
          className="text-neutral-900 bg-neutral-100/70 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-700 dark:text-white focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/30"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor={contentId} className="text-neutral-900 dark:text-white">
          Content
        </Label>
        <Textarea
          id={contentId}
          defaultValue={ticket?.content}
          name="content"
          className="text-neutral-900 bg-neutral-100/70 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-700 dark:text-white focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/30"
        />
      </div>
      <Button
        type="submit"
        className="mt-4 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:active:bg-yellow-700 text-neutral-900 dark:text-neutral-900"
      >
        {ticket? "Edit" : "Create"}
      </Button>
    </Form>
  );
};

export { TicketUpsertForm };
