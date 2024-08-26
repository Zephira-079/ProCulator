function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randint(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

function random(min, max) {
	return (Math.random() * (max - min)) + min
}

function choice(...array) {
    const flattenArray = array.flat(Infinity)

    return flattenArray[Math.floor(Math.random() * flattenArray.length)]
}
