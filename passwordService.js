export class passwordService {
    static getRandomLowerCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        // console.log(randomLower)
    }

    static getRandomUpperCase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
        // console.log(randomLower)
    }

    static getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }

    static getRandomSymbol() {
        let symbolStr = `!@#$%^&*(){}[]/`
        return symbolStr[Math.floor(Math.random() * symbolStr.length)]
    }

    static getPasswordObj(state) {
        let passwordObj = {}
        for (let key of Object.keys(state)) {
            if (typeof state[key] === "boolean" && state[key]) {
                passwordObj = {
                    ...passwordObj,
                    [key]: state[key]
                }
            }
        }
        return passwordObj;
    }
    static generatePassword(passwordObj, passwordLength) {
        let thePassword = ""
        for (let i = 0; i < Number(passwordLength); i+= Object.keys(passwordObj).length) {
            if (passwordObj.lower) thePassword += `${this.getRandomLowerCase()}`
            if (passwordObj.upper) thePassword += `${this.getRandomUpperCase()}`
            if (passwordObj.symbol) thePassword += `${this.getRandomSymbol()}`
            if (passwordObj.number) thePassword += `${this.getRandomNumber()}`
        }
        return thePassword.substring(0, Number(passwordLength))
    }
}