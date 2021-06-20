import { SHOW_FALLBACK, HIDE_FALLBACK  } from './constants';

export function showFallback () {
  return {
    type: SHOW_FALLBACK
  };
}

export function hideFallback() {
  return {
    type: HIDE_FALLBACK
  };
}

export function returnToDefault() {
  return {
    type: RETURN_TO_DEFAULT,
  };
}
