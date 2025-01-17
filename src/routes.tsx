import Summary from "pages/Summary/Summary";
import NotFound from "pages/NotFound/NotFound";
import React from "react";
import Perspectives from "pages/Perspectives/Perspectives";
import Perspective from "pages/Perspective/Perspective";
import {
  PerspectiveData,
  PERSPECTIVES,
} from "pages/Perspectives/perspectivesData";
import DisclaimerPage from "pages/DisclaimerPage/DisclaimerPage";

export const PATHS = {
  HOME: "/",
  PERSPECTIVES: "/perspectives",
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
    subroutes: unpackPerspectives(PERSPECTIVES),
  },
  {
    path: "/disclaimer",
    label: "Disclaimer",
    showInNavigation: true,
    siteElement: <DisclaimerPage />,
  },
  {
    path: "*",
    siteElement: <NotFound />,
    label: "Not found",
    showInNavigation: false,
  },
];

function unpackPerspectives(perspectivesData: PerspectiveData[]): SiteRoute[] {
  return perspectivesData.map(
    (data) =>
      ({
        label: data.label,
        path: PATHS.PERSPECTIVES + data.subpath,
        shortLabel: data.shortLabel,
        showInNavigation: true,
        depth: 1,
        siteElement: <Perspective elements={data.elements} />,
      }) as SiteRoute
  );
}

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
