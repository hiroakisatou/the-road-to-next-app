import { useEffect, useRef } from 'react';
import type { ActionState } from '../utils/ts-action-state';

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess: (onArgs: OnArgs) => void;
  onError: (onArgs: OnArgs) => void;
};

const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions,
) => {
  const prevTimeStamp = useRef(actionState.timestamp);
  const isupdate = prevTimeStamp.current !== actionState.timestamp;

  useEffect(() => {
    if (!isupdate) return;

    if (actionState.status === 'SUCCESS') {
      options.onSuccess?.({ actionState });
    }
    if (actionState.status === 'ERROR') {
      options.onError?.({ actionState });
    }
    prevTimeStamp.current = actionState.timestamp;
  }, [actionState, options, isupdate]);
};

export { useActionFeedback };
