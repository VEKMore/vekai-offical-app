const MEMBER_MODE_KEY = 'vekai-member-mode';

export function isMemberMode() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(MEMBER_MODE_KEY) === 'true';
}

export function setMemberMode(value) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(MEMBER_MODE_KEY, String(value));
}

export function clearMemberMode() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(MEMBER_MODE_KEY);
}
