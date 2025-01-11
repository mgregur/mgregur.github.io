import Summary from "pages/Summary/Summary";
import NotFound from "pages/NotFound/NotFound";
import React from "react";

export interface SiteRoute {
  path: string;
  siteElement: React.ReactNode;
  label: string;
  showInNavigation: boolean;
}

export const SiteRoutes: SiteRoute[] = [
  {
    path: "/",
    siteElement: <Summary />,
    label: "Summary",
    showInNavigation: true,
  },
  {
    path: "*",
    siteElement: <NotFound />,
    label: "Not found",
    showInNavigation: false,
  },
];
