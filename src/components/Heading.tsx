import { Separator } from './ui/separator';

type HeadingProps = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-nomal, text-muted-foreground">{description}</p>
      </div>
      <Separator className="border-b border-gray-300 dark:border-neutral-600" />
    </>
  );
};

export { Heading };
