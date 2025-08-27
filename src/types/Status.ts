export enum Status {
  TODO = "TODO",
  IN_PROGRESS = "IN PROGRESS",
  IN_REVIEW = "IN REVIEW",
  DEPLOY = "DEPLOY",
  IN_TESTING = "IN TESTING",
  VERIFY = "VERIFY",
  DONE = "DONE",
}

export const statusOrder: Status[] = [
  Status.TODO,
  Status.IN_PROGRESS,
  Status.IN_REVIEW,
  Status.DEPLOY,
  Status.IN_TESTING,
  Status.VERIFY,
  Status.DONE,
];
