"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/client-functions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function DynamicBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <Breadcrumb className="w-full overflow-x-auto scrollbar-none">
      <BreadcrumbList className="flex-wrap sm:flex-nowrap items-center">
        {breadcrumbs.map((breadcrumb, index) => {
          // Show only first and last items on mobile
          const isMobileHidden = index !== 0 && 
                                index !== breadcrumbs.length - 1 && 
                                breadcrumbs.length > 2;

          return (
            <React.Fragment key={breadcrumb.href}>
              <BreadcrumbItem 
                className={`
                  ${isMobileHidden ? 'hidden sm:inline-flex' : 'inline-flex'}
                  min-w-0 items-center
                `}
              >
                {breadcrumb.isCurrentPage ? (
                  <BreadcrumbPage className="truncate max-w-[150px] sm:max-w-[200px]">
                    {breadcrumb.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink 
                    href={breadcrumb.href}
                    className="truncate max-w-[150px] sm:max-w-[200px]"
                  >
                    {breadcrumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator 
                  className={isMobileHidden ? 'hidden sm:inline-flex' : 'inline-flex'}
                />
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}