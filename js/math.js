const pi = Math.PI
const π = pi
const e = Math.E
const phi = (1 + Math.sqrt(5)) / 2
const φ = phi
const Φ = phi

function help() {

    const helptext = `
    // mode = true; in radians
    // mode = false, undefined; in degrees
    // precise: float, returns a precision
    `
    console.log(helptext)
}

function perc(n) {
    // percentage
    return precision(n / 100)
}

function ln(n) {
    return precision(Math.log(n))
}

function log(n, b) {
    // n as argument
    // b as base

    if (b === undefined) return precision(Math.log10(n))
    return precision(Math.log(n) / Math.log(b))
}

function sqrt(n) {
    return precision(Math.sqrt(n))
}

function cbrt(n) {
    return precision(Math.cbrt(n))
}

function radical(base, _radical, exponent = 1) {
    return precision(base ** (exponent / _radical))
}

function exp(n, exponent = 1) {
    //exponent 

    return n ** exponent
}

function sigma(n) {
    return (n ** 2 + n) / 2
}

function sum(...n) {
    const flattenedArray = n.flat(Infinity)
    return flattenedArray.reduce((acc, num) => acc + (typeof num === 'number' ? num : 0), 0)
}

function fact(n) {
    //factorial

    if (n === 0 || n === 1) return 1
    return n * fact(n - 1)
}

function hyp(a, b) {
    return sqrt(exp(a, 2) + exp(b, 2))
}

function sin(theta, mode, precise) {

    if (mode === undefined) return precision(Math.sin(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(Math.sin(deg_to_rad(theta)), precise)

    return precision(Math.sin(theta), precise)
}

function cos(theta, mode, precise) {

    if (mode === undefined) return precision(Math.cos(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(Math.cos(deg_to_rad(theta)), precise)

    return precision(Math.cos(theta), precise)
}

function tan(theta, mode, precise) {

    if (mode === undefined) return precision(Math.tan(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(Math.tan(deg_to_rad(theta)), precise)

    return precision(Math.tan(theta), precise)
}

function sec(theta, mode, precise) {

    if (mode === undefined) return precision(1 / Math.cos(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(1 / Math.cos(deg_to_rad(theta)), precise)

    return precision(1 / Math.cos(theta), precise)
}

function csc(theta, mode, precise) {

    if (mode === undefined) return precision(1 / Math.sin(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(1 / Math.sin(deg_to_rad(theta)), precise)

    return precision(1 / Math.sin(theta), precise)
}

function cot(theta, mode, precise) {

    if (mode === undefined) return precision(1 / Math.tan(deg_to_rad(theta)), precise)
    else if (mode == false) return precision(1 / Math.tan(deg_to_rad(theta)), precise)

    return precision(1 / Math.tan(theta), precise)
}


function arcsin(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.asin(theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.asin(theta)), precise)

    return precision(Math.asin(theta), precise)
}

function arccos(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.acos(theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.acos(theta)), precise)

    return precision(Math.acos(theta), precise)
}
function arctan(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.atan(theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.atan(theta)), precise)

    return precision(Math.atan(theta), precise)
}

function arcsec(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.acos(1 / theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.acos(1 / theta)), precise)

    return precision(Math.acos(1 / theta), precise)
}

function arccsc(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.asin(1 / theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.asin(1 / theta)), precise)

    return precision(Math.asin(1 / theta), precise)
}

function arccot(theta, mode, precise) {
    if (mode === undefined) return precision(rad_to_deg(Math.atan(1 / theta)), precise)
    else if (mode == false) return precision(rad_to_deg(Math.atan(1 / theta)), precise)

    return precision(Math.atan(1 / theta), precise)
}


function precision(number, value = 12) {
    // number: number
    // value: precision

    if (value <= 0) throw new Error("Precision value must be positive.")
    const precisionFactor = parseFloat(`1e${value}`)
    if (number === undefined || number === Infinity || isNaN(number)) return undefined
    if (Math.abs(number) >= precisionFactor) return undefined

    number = Math.round((number * precisionFactor) + Number.EPSILON) / precisionFactor
    return parseFloat(parseFloat(number).toPrecision(value))
}

function deg_to_rad(degree) {
    return precision(Math.PI * degree / 180, 30)
}
function rad_to_deg(radian) {
    return precision(180 * radian / Math.PI, 30)
}

function abs(n) {
    return Math.abs(n)
}

function pgrade_eq(numericalGrade) {
    if (numericalGrade < 1.00 || numericalGrade > 5.00) {
        return "Invalid grade"
    }

    // Define the mapping of numerical grades to percentage ranges
    const gradeRanges = [
        { min: 1.00, max: 1.24, minPercent: 97, maxPercent: 100 },
        { min: 1.25, max: 1.49, minPercent: 94, maxPercent: 96 },
        { min: 1.50, max: 1.74, minPercent: 91, maxPercent: 93 },
        { min: 1.75, max: 1.99, minPercent: 88, maxPercent: 90 },
        { min: 2.00, max: 2.24, minPercent: 85, maxPercent: 87 },
        { min: 2.25, max: 2.49, minPercent: 82, maxPercent: 84 },
        { min: 2.50, max: 2.74, minPercent: 79, maxPercent: 81 },
        { min: 2.75, max: 2.99, minPercent: 76, maxPercent: 78 },
        { min: 3.00, max: 3.00, minPercent: 75, maxPercent: 75 },
        { min: 5.00, max: 5.00, minPercent: 0, maxPercent: 74 }
    ]

    for (let range of gradeRanges) {
        if (numericalGrade >= range.min && numericalGrade <= range.max) {
            let percentage = range.minPercent + (range.maxPercent - range.minPercent) * ((numericalGrade - range.min) / (range.max - range.min))
            return `${percentage.toFixed(2)}%`
        }
    }

    return "Invalid grade"
}

function round(n, x) {
    return Math.round(n)
}

function floor(n) {
    return Math.floor(n)
}
function ceil(n) {
    return Math.ceil(n)
}

function std(...n) {
    const flatArray = n.flat(Infinity)
    const average = flatArray.reduce((acc, val) => acc + val, 0) / flatArray.length
    const variance = flatArray.reduce((acc, val) => acc + Math.abs((val - average) ** 2), 0) / flatArray.length
    return Math.sqrt(variance)
}


function var_(...n) {
    const flatArray = n.flat(Infinity)
    const average = flatArray.reduce((acc, val) => acc + val, 0) / flatArray.length
    const variance = flatArray.reduce((acc, val) => acc + Math.abs((val - average) ** 2), 0) / flatArray.length
    return variance
}

function moe(std) {
    return std/sqrt(len([10, 12, 23, 23, 16, 23, 21, 16]))
}

function len(n) {
    if (Array.isArray(n)) return n.length
}

function mean(...n) {
    const flattenedArray = n.flat(Infinity)
    return flattenedArray.reduce((acc, num) => acc + (typeof num === 'number' ? num : 0), 0) / n.length
}
