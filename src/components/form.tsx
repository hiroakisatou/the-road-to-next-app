import { toast } from 'sonner';
import { useActionFeedback } from './form/hools/ujse-action-feedback';
import type{ActionState } from './form/utils/ts-action-state';

type FormProps = {
  action: (payload: FormData) => void;
  children: React.ReactNode;
  actionState: ActionState;
  className?: string;
  onSuccess?: (actionState: ActionState) => void;
  onError?: (actionState: ActionState) => void;
};

const Form = ({ action, actionState, children, onSuccess, onError }: FormProps) => {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
      onSuccess?.(actionState);
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
      onError?.(actionState);
    },
  });

  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};

export { Form };
