import { useState } from 'react'
import moment from 'moment'
import { timeSince } from './timeSince'

export const fetchTimeSince = date => {
	var seconds = Math.floor(
		(new Date() - new Date(date)) / 1000
	)
	var interval = Math.floor(seconds / 86400)
	if (interval >= 1) {
		return moment(date).format('DD MMM YYYY HH:mm:ss')
	} else {
		const [timeStep, setTimeStep] = useState(
			timeSince(date)
		)
		if (date) {
			setTimeout(() => {
				const getTime = timeSince(date)
				setTimeStep(getTime)
			}, 10000)
		}
		return timeStep
	}
}
