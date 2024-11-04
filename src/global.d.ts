type sideBarTeamData = {
    name: string,
    logo: string,
    plan: string
}

type sideBarHeaderData = {
    teams: sideBarTeamData[],
}

type PieChart = {
    browser: string,
    visitors: number,
    fill: string
}

type RadarChart = {
    month: string,
    desktop: number
}

type LineChartType = {
    browser: string,
    visitors: number,
    fill: string
}

type BarChartType = {
    date: string,
    desktop: number,
    mobile: number,
}

type SideBarFooterDataType = {
    user: {
        name: string,
        email: string,
        avatar: string,
    }
}

type GithubProviderType = {
    clientId:string,
    clientSecret:string
}

type BreadcrumbType = {
    href: string;
    label: string;
    isCurrentPage?: boolean;
  };

  // types/organization.ts

interface OrganizationMetadata {
    [key: string]: any;
  }
  
  interface Organization {
    object: string;
    id: string;
    name: string;
    slug: string;
    members_count: number;
    max_allowed_memberships: number;
    admin_delete_enabled: boolean;
    public_metadata: OrganizationMetadata;
    private_metadata: OrganizationMetadata;
    created_by: string;
    created_at: number;
    updated_at: number;
  }
  
  interface OrganizationData {
    organization: Organization;
  }
  
  interface OrganizationResponse {
    data: OrganizationData[];
    total_count: number;
  }
  
  interface NavItem {
    title: string;
    url: string;
}

// Type for main navigation items
interface NavMainItem {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items: NavItem[];
}

// Type for project items
interface ProjectItem {
    name: string;
    url: string;
    icon: LucideIcon;
}

// Main type that combines everything
interface NavigationData {
    navMain: NavMainItem[];
    projects: ProjectItem[];
}
