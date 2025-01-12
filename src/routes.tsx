import Summary from "pages/Summary/Summary";
import NotFound from "pages/NotFound/NotFound";
import React from "react";
import Perspectives from "pages/Perspectives/Perspectives";
import EffectiveCommunication from "pages/Perspectives/Subsites/EffectiveCommunication/EffectiveCommunication";

export const PATHS = {
  HOME: "/",
  PERSPECTIVES: "/perspectives",
  PER_EFFECTIVE_COMMUNICATION: "/perspectives/effective-communication",
};

export interface SiteRoute {
  path: string;
  siteElement: React.ReactNode;
  label: string;
  showInNavigation: boolean;
  subroutes?: SiteRoute[];
  depth?: number;
  shortLabel?: string;
}

export const SiteRoutes: SiteRoute[] = [
  {
    path: PATHS.HOME,
    siteElement: <Summary />,
    label: "Summary",
    showInNavigation: true,
  },
  {
    path: PATHS.PERSPECTIVES,
    label: "My Perspectives",
    showInNavigation: true,
    siteElement: <Perspectives />,
    subroutes: [
      {
        path: PATHS.PER_EFFECTIVE_COMMUNICATION,
        label: "Effective Communication",
        shortLabel: "Eff. Comm.",
        showInNavigation: true,
        siteElement: <EffectiveCommunication />,
      },
    ],
  },
  {
    path: "*",
    siteElement: <NotFound />,
    label: "Not found",
    showInNavigation: false,
  },
];

export function unpackRoutes(
  routes: SiteRoute[],
  depth: number = 0
): SiteRoute[] {
  return routes.reduce((acc: SiteRoute[], route: SiteRoute) => {
    route.depth = depth;
    acc.push(route);
    if (route.subroutes) {
      acc.push(...unpackRoutes(route.subroutes, depth + 1));
    }
    return acc;
  }, []);
}
