


export function MakeFormatInfo({
    value,
    type,
    name,
    placeholder,
    isMultiline,
}){
    const formatInfo = {
        value: value,
        type: type,
        name: name,
        placeholder: placeholder,
        isMultiline: isMultiline,
        isHaveLable: true,
    }
    return formatInfo;
}