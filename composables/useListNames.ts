export const useListNames = (namesString: String) => {
    if (!namesString) return "";

    let namesAsString: String = "";
    const names: Array<String> = namesString.split(",");

    if (!names) return "";

    names.forEach((name: String, i: Number) => {
        const separator = names.length > 2 && i !== names.length - 1 && i !== 0 ? ", " : (names.length === 2 || names.length > 2) && i === names.length - 1 ? " и" : "";

        namesAsString += `${separator}${name}`;
    });

    return namesAsString;
};
