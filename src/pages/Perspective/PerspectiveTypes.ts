export interface PerspectiveElement {
  type:
    | "header"
    | "header-divider"
    | "content"
    | "bullet-list"
    | "content-with-bullet-list";
  bullets?: string[];
  text?: string;
  headerType?: "h3" | "h4" | "h5";
}
