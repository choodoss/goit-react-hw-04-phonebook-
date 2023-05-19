
export default function generateId() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let id = '';

    for (let i = 0; i < 6; i++) {
        const letterIndex = Math.floor(Math.random() * letters.length);
        const letter = letters[letterIndex];
        const numberIndex = Math.floor(Math.random() * numbers.length);
        const number = numbers[numberIndex];
        id += letter + number;
    }

    return id;
}