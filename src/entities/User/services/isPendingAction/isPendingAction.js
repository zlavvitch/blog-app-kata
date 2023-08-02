/* eslint-disable import/prefer-default-export */

export function isPendingAction(action) {
  return action.type.endsWith("pending");
}
