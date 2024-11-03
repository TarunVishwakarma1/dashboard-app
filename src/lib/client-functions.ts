'use client'

import { auth, clerkClient } from "@clerk/nextjs/server";
import { useTheme } from "next-themes";

function getCurrentTheme() {
  const { theme } = useTheme();
  return theme;
}

function generateBreadcrumbs(path: string): BreadcrumbType[] {
  // Remove query parameters
  const cleanPath = path.split('?')[0];
  
  // Split path into segments
  const segments = cleanPath.split('/').filter(Boolean);
  
  // Generate breadcrumbs array
  const breadcrumbs: BreadcrumbType[] = [];
  
  // Always add dashboard as first item
  breadcrumbs.push({
    href: '/dashboard',
    label: 'Dashboard'
  });
  
  // Build up remaining breadcrumbs
  let currentPath = '/dashboard';
  segments.forEach((segment, index) => {
    if (segment !== 'dashboard') {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        href: currentPath,
        label: formatBreadcrumbLabel(segment) ==='User Profile' ? 'Settings' : formatBreadcrumbLabel(segment),
        isCurrentPage: index === segments.length - 1
      });
    }
  });
  
  return breadcrumbs;
}

function formatBreadcrumbLabel(segment: string): string {
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export {getCurrentTheme, generateBreadcrumbs}