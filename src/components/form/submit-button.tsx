'use client';

import { faSpinner } from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormStatus } from 'react-dom';
import { Button } from '../ui/button';

type SubmitButtonProps = {
  label: string;
};

const SubmitButton = ({ label }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="mt-4 bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:active:bg-yellow-700 text-neutral-900 dark:text-neutral-900"
    >
      {pending && (
        <FontAwesomeIcon
          icon={faSpinner}
          className="mr-2 h-4 w-4 animate-spin"
        />
      )}
      {label}
    </Button>
  );
};
export { SubmitButton };
