export const timeToString = time => {
    const dt = new Date(time);
    return `${dt.getMinutes()}:${dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds()}`
};

export const formatKM = number => number > 999 && number <= 999999 ? `${Math.trunc(number/1000)}K` : number > 999999 ? `${Math.trunc(number/1000000)}M` : `${number}`; 

export const capitalize = str  => str.charAt(0).toUpperCase() + lowercase(str.slice(1));

export const capitalizeIfBold = str  => str.charAt(0) === '<' ? `<b>${capitalize(str.slice(3))}` : capitalize(str);

export const lowercase = str  => str.toLocaleLowerCase();

export const boldString = (str, substr)  => substr.length > 0 ? str.replaceAll(substr, `<b>${substr}</b>`) : str;
