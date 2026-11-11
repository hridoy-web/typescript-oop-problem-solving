
function multiplyValue(value: number, multiplier: number = 2  ): number {
    return value * multiplier
}
const multiplyTotal = multiplyValue(10, 0);
// console.log(multiplyTotal)


function processInput (input: string | number | boolean): string | number{

    if(typeof input === "string"){
     return input.trim().toLowerCase()
    } else if (typeof input === "number"){
        return input * 10
    } else {
        return input ? "Active" : "Inactive"
    }
}
const processData = processInput(false)
// console.log(processData);


function formatCoordinate(value: readonly[number, number, string]): string{

    const [latitude, longitude, locationName] = value;

    return `Location: ${locationName} (${latitude}, ${longitude})`
}
const locationData = formatCoordinate([22.35, 91.78, "Chittagong"])
// console.log(locationData);


