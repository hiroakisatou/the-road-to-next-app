'use client';
import { useActionState, useId } from 'react';
import { Form } from '@/components/form';
import { FieldError } from '@/components/form/field-error';
import { SubmitButton } from '@/components/form/submit-button';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/ts-action-state';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { upsertTicket } from '@/futures/actions/upsert-tickets';
import type { Ticket } from '@/futures/ticket/types';

type TicketUpdateFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpdateFormProps) => {
  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    EMPTY_ACTION_STATE,
  );

  const titleId = useId();
  const contentId = useId();

  return (
    <Form action={action} actionState={actionState}>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor={titleId} className="text-neutral-900 dark:text-white">
          Title
        </Label>
        <Input
          id={titleId}
          defaultValue={
            (actionState.payload?.get('title') as string) ?? ticket?.title
          }
          name="title"
          type="text"
          className="text-neutral-900 bg-neutral-200 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-700 dark:text-white focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/30"
        />
        <FieldError actionState={actionState} name="title" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Label htmlFor={contentId} className="text-neutral-900 dark:text-white">
          Content
        </Label>
        <Textarea
          id={contentId}
          defaultValue={
            (actionState.payload?.get('content') as string) ?? ticket?.content
          }
          name="content"
          className="text-neutral-900 bg-neutral-200/70 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-700 dark:text-white focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/30"
        />
        <FieldError actionState={actionState} name="content" />
      </div>
      <SubmitButton label={ticket ? 'Edit' : 'Create'} />
    </Form>
  );
};

export { TicketUpsertForm };
