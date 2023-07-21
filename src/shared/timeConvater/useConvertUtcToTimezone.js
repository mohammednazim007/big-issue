

function useConvertUtcToTimezone(utcString, targetTimeOffset) {
    // Step 1: Create a new Date object from the UTC time string
    const utcDate = new Date(utcString);

    // Step 2: Get the time zone offset in minutes
    const utcOffset = utcDate.getTimezoneOffset();

    // Step 3: Apply the time zone offset to get the target time
    const targetOffset = targetTimeOffset * 60; // Convert the target offset to seconds

    const targetTime = new Date(utcDate.getTime() + (targetOffset + utcOffset) * 1000);

    return targetTime;
}


export default useConvertUtcToTimezone
