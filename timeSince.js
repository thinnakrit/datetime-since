export const timeSince = date => {
	var seconds = Math.floor(
		(new Date() - new Date(date)) / 1000
	)

	var interval = Math.floor(seconds / 3600)
	if (interval >= 1) {
		return (
			interval +
			` ${
				interval === 1
					? 'hour ago'
					: 'hours ago'
			}.`
		)
	}
	interval = Math.floor(seconds / 60)
	if (interval >= 1) {
		return (
			interval +
			` minute ago`
		)
	}
	interval = Math.floor(seconds)
	if (interval > 20) {
		return (
			interval +
			` Second ago`
		)
	}

	return 'Justnow'
}
