
function getSum (...args) {
    return args.reduce((a, b) => a + b )
        if(!args.length) {
            return 0
        }
    }

// return bigest number from array
function getMax (...args) {
    return Math.max(...args)
}

export default getSum

export {
    getSum ,
    getMax
}