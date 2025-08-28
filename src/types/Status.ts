export enum Status {
  TODO = "TODO",
  IN_PROGRESS = "IN PROGRESS",
  IN_REVIEW = "IN REVIEW",
  DEPLOY = "DEPLOY",
  IN_TESTING = "IN TESTING",
  VERIFY = "VERIFY",
  DONE = "DONE",
}

export const StatusObject = {
  [Status.TODO]: "TODO",
  [Status.IN_PROGRESS]: "IN PROGRESS",
  [Status.IN_REVIEW]: "IN REVIEW",
  [Status.DEPLOY]: "DEPLOY",
  [Status.IN_TESTING]: "IN TESTING",
  [Status.VERIFY]: "VERIFY",
  [Status.DONE]: "DONE",
};
