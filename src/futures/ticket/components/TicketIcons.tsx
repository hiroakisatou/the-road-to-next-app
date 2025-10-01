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

export default TICKET_ICONS;
