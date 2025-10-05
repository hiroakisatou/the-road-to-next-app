import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type CardCompactProps = {
  title: string;
  description: string;
  className?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
};

const CardCompact = ({
  title,
  description,
  className,
  content,
  footer,
}: CardCompactProps) => {
  return (
    <Card className={className}>
      <CardHeader className="gap-y-2">
        <CardTitle className="text-2xl m-0 p-0 font-bold text-neutral-900 dark:text-neutral-50">
          {title}
        </CardTitle>
        <CardDescription className="m-0 p-0 text-neutral-700dark:text-neutral-200">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && (
        <CardFooter className="flex justify-between">{footer}</CardFooter>
      )}
    </Card>
  );
};

export { CardCompact };
