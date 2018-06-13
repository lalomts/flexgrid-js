import cx from 'classnames'

export default function parseConfig(config, acceptedAttributes, basicClasses) {

	//Accepted attributes: size, offset, align, dist, reorder, hidden, reverse 

	let classes = {}

	if (config) {

		const acceptedViewports = ['xs', 'sm', 'md', 'lg', 'xl'] 

		for (let attribute in config) {

			if (acceptedAttributes.includes(attribute)) {

				let viewports = config[attribute]

				for (let viewport in viewports) {

					if (acceptedViewports.includes(viewport)) {

						const attributeClasses = parseAttribute(attribute, viewport, viewports[viewport])

						Object.assign(classes, attributeClasses)
					}
				}
			}
		}
	}

	Object.assign(classes, basicClasses)

	return cx(classes)
}

function parseAttribute(attribute, size, value) {

	switch (attribute) {

		case 'size': 
			const key = (value === 'auto') ? `col-${size}` : `col-${size}-${value}`
			return { [key]: true }

		case 'offset': 
			return { [`col-${size}-offset-${value}`]: true }

		case 'reorder': 
			let formattedValue = value.replace(/([a-z])([A-Z])/g, ' $1-$2')
			return { [`${formattedValue}-${size}`] : true }

		case 'align': 
			let classes = {}
			value.forEach(element => { classes[`${element}-${size}`] = true })
			return classes

		case 'dist': 
			return { [`${value}-${size}`]: true }

		default: 
			return {[`${attribute}-${size}`] : value }
	}
}
