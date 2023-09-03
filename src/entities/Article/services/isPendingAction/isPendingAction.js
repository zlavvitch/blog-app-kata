export function isPendingAction(action) {
  return action.type.endsWith("pending");
}
