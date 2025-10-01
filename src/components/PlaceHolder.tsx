import { type LucideIcon, MessageSquareWarning } from 'lucide-react';

type PlaceHolderProps = {
  label: string;
  icon?: LucideIcon;
  className?: string;
  button?: React.ReactElement;
};

const PlaceHolder = ({
  label,
  icon: Icon = MessageSquareWarning,
  className = '',
  button = <div />,
}: PlaceHolderProps): React.ReactElement => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      <Icon size={64} aria-hidden="true" className={className} />
      <h2 className="text-lg text-center">{label}</h2>
      {button}
    </div>
  );
};

export default PlaceHolder;
