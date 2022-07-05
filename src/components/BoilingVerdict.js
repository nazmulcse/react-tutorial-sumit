export default function BoilingVerdict({ scale = 'c', temperature = 0 }) {
    if (scale === 'c' && temperature >= 100) {
        return <p> The water would boil </p>;
    }
    if (scale === 'f' && temperature >= 212) {
        return <p> The water would boil </p>;
    }
    return <p> The water would not boil </p>;
}
