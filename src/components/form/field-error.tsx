import type{ ActionState } from './utils/ts-action-state';

type FieldErrorProps = {
  actionState: ActionState;
  name: string;
};

const FieldError = ({ actionState, name }: FieldErrorProps) => {
  const message = actionState.fieldErrors[name]?.[0];

  if (!message) {
    return null;
  }

  return <p className="text-xs text-red-500">{message}</p>;
};

export { FieldError };
