const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
};
export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter Temperature in {scaleName[scale]}</legend>
            <input type="text" value={temperature} onChange={onTemperatureChange} />
        </fieldset>
    );
}