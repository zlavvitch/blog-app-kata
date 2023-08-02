/* eslint-disable import/prefer-default-export */

export function isRejectedAction(action) {
  return action.type.endsWith("rejected");
}
