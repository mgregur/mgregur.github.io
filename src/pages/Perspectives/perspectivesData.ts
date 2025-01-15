import { PerspectiveElement } from "pages/Perspective/PerspectiveTypes";
import { EFFECTIVE_COMMUNICATION_ELEMENTS } from "./content/effectiveCommunicationContent";

export interface PerspectiveData {
  cardTitle: string;
  cardDescription: string;
  subpath: string;
  label: string;
  shortLabel?: string;
  elements: PerspectiveElement[];
}

export const PERSPECTIVES: PerspectiveData[] = [
  {
    cardTitle: "Effective Communication",
    cardDescription:
      'Differing communication styles impact team efficiency. Asking "unnecessary" questions and challenging assumptions early can prevent costly misunderstandings.',
    label: "Effective Communication",
    shortLabel: "Eff. Comm.",
    subpath: "/effective-communication",
    elements: EFFECTIVE_COMMUNICATION_ELEMENTS,
  },
];
