import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export type BreadcrumbItemProps = {
  label: string;
  href?: string;
  isCurrent?: boolean;
};

interface PageBreadcrumbsProps {
  items: BreadcrumbItemProps[];
  className?: string;
}

function PageBreadcrumbs({ items, className }: PageBreadcrumbsProps) {
  return (
    <Breadcrumb
      data-slot="page-breadcrumbs"
      className={cn("has-[&_~*]:border-b has-[&_~*]:pb-4", className)}
    >
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem
            key={String(index)}
            className={item.isCurrent ? "hidden md:block" : undefined}
          >
            {item.isCurrent ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                {index < items.length - 1 && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function PageRoot({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="page"
      className={cn("flex flex-col gap-4 p-4", className)}
      {...props}
    />
  );
}

function PageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header"
      className={cn("flex flex-col items-start gap-1.5", className)}
      {...props}
    />
  );
}

function PageTagline({
  className,
  ...props
}: React.ComponentProps<typeof Badge>) {
  return (
    <Badge data-slot="page-tagline" className={cn(className)} {...props} />
  );
}

function PageTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="page-title"
      className={cn(
        "scroll-m-24 font-semibold text-3xl tracking-tight sm:text-3xl",
        className,
      )}
      {...props}
    />
  );
}

function PageDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-description"
      className={cn(
        "text-[1.05rem] text-muted-foreground sm:text-balance sm:text-base md:max-w-[80%]",
        className,
      )}
      {...props}
    />
  );
}

function PageContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-content"
      className={cn("relative flex flex-col gap-4", className)}
      {...props}
    />
  );
}

export const Page = Object.assign(PageRoot, {
  Header: PageHeader,
  Tagline: PageTagline,
  Title: PageTitle,
  Description: PageDescription,
  Content: PageContent,
  Breadcrumbs: PageBreadcrumbs,
});
