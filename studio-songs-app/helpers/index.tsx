enum flatShapDisplay {
	sharp = '♯',
	doubleSharp = '♯♯',
	flat = '♭',
	doubleFlat = '♭♭',
}

export function getDisplayFlatSharp(flatSharp: string): '' | flatShapDisplay {

	let value: '' | flatShapDisplay

	switch (flatSharp) {
		case 'sharp':
			value = flatShapDisplay.sharp
			break
		case 'doubleSharp':
			value = flatShapDisplay.doubleSharp
			break
		case 'flat':
			value = flatShapDisplay.flat
			break
		case 'doubleFlat':
			value = flatShapDisplay.doubleFlat
			break
		default:
			value = ''
			break
	}

	return value;
}
