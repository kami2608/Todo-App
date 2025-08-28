export enum Priority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export const PRIORITY_FILTER_OPTIONS: Record<Priority, string> = {
  [Priority.HIGH]: "HIGH",
  [Priority.MEDIUM]: "MEDIUM",
  [Priority.LOW]: "LOW",
};
