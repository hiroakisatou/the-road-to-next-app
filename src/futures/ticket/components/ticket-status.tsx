import {
  faCheck,
  faFile,
  faPencil,
} from '@awesome.me/kit-6fc71ec626/icons/classic/regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ReactElement } from 'react';
import type { TicketState } from '../types';

const TICKET_ICONS: Record<TicketState, ReactElement> = {
  OPEN: <FontAwesomeIcon icon={faFile} />,
  IN_PROGRESS: <FontAwesomeIcon icon={faPencil} />,
  DONE: <FontAwesomeIcon icon={faCheck} />,
};

const TICKET_STATUS_LABELS = {
  OPEN: 'Open',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
} as const;

export { TICKET_ICONS, TICKET_STATUS_LABELS };
