import { browser } from '$app/environment'

export function isdeviceTouchFriendly() {
	let isMobile = false

	if (!browser) return isMobile

	if (navigator !== null || navigator !== undefined) {
	}
	if ('maxTouchPoints' in navigator) {
		isMobile = navigator.maxTouchPoints > 0
	} else if ('msMaxTouchPoints' in navigator) {
		if (navigator !== null) {
			// @ts-ignore
			isMobile = navigator.msMaxTouchPoints > 0
		}
	} else {
		// @ts-ignore
		const mQ = window.matchMedia && matchMedia('(pointer:coarse)')
		if (mQ && mQ.media === '(pointer:coarse)') {
			isMobile = !!mQ.matches
		} else if ('orientation' in window) {
			isMobile = true // deprecated, but good fallback
		} else {
			// Only as a last resort, fall back to user agent sniffing
			// @ts-ignore
			const UA = navigator.userAgent
			isMobile =
				/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
				/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
		}
	}
	return isMobile
}
