import React from "react";

export default function InputBox({
  type,
  placeholder,
  value,
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  className,
  isMultiline,
  maxLength,
  autoFocus,
  autoComplete,
  disabled,
  required,
  readOnly,
  spellCheck,
  autoCorrect,
  inputMode,
  pattern,
  title,
  id,
  name,
  style,
  autoHaveLabel,
  rows,
  cols,
}) {
  return (
    <div className="">
        {autoHaveLabel && <label htmlFor={name}>{title}</label>}
     {!isMultiline && <input
        type={type?type:"text"}
        onChange={onChange && onChange}
        onKeyDown={onKeyDown && onKeyDown}
        onBlur={onBlur && onBlur}
        onFocus={onFocus && onFocus}
        className={`input-box ${className && className}`}
        placeholder={placeholder? placeholder : `Enter ${title && title}`}
        value={value && value}
        maxLength={maxLength&& maxLength}
        autoFocus={autoFocus && autoFocus}
        autoComplete={autoComplete && autoComplete}
        disabled={disabled && disabled}
        required={required && required}
        readOnly={readOnly && readOnly}
        spellCheck={spellCheck && spellCheck}
        autoCorrect={autoCorrect && autoCorrect}
        inputMode={inputMode && inputMode}
        pattern={pattern && pattern}
        title={title? title :"Input Box"}
        id={id?id:`input-box-${name && name}`}
        name={name && name}
        style={style && style}
      />}
      {isMultiline && <textarea
        rows={rows && rows}
        cols={cols && cols}
        onChange={onChange && onChange}
        onKeyDown={onKeyDown && onKeyDown}
        onBlur={onBlur && onBlur}
        onFocus={onFocus && onFocus}
        className={`input-box ${className && className}`}
        placeholder={placeholder? placeholder : `Enter ${title && title}`}
        value={value && value}
        maxLength={maxLength&& maxLength}
        autoFocus={autoFocus && autoFocus}
        autoComplete={autoComplete && autoComplete}
        disabled={disabled && disabled}
        required={required && required}
        readOnly={readOnly && readOnly}
        spellCheck={spellCheck && spellCheck}
        autoCorrect={autoCorrect && autoCorrect}
        inputMode={inputMode && inputMode}
        pattern={pattern && pattern}
        title={title? title :"Input Box"}
        id={id?id:`input-box-${name && name}`}
        name={name && name}
        style={style && style}
      />}
    </div>
  );
}
