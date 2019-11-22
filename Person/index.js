
let counterId = 0

class Person {
    constructor (name, family) {
        this.name = name
        this.family = family
        this.Id = ++counterId
    }
}
// export class
export default Person

