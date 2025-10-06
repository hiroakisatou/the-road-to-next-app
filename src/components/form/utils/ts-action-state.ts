import { z } from 'zod';

export type ActionState = {
  status?: 'SUCCESS' | 'ERROR';
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[]>;
  timestamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: '',
  fieldErrors: {},
  timestamp: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData,
): ActionState => {
  if (error instanceof z.ZodError) {
    return {
      status: 'ERROR',
      message: '',
      fieldErrors: z.flattenError(error).fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: 'ERROR',
      message: error.message,
      fieldErrors: {},
      payload: formData,      
      timestamp: Date.now(),
    };
  } else {
    return {
      status: 'ERROR', 
      message: 'An unknow error occured',
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }
};

export const toActionState = (status: ActionState['status'], message: string): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    timestamp: Date.now(),
  };
}
