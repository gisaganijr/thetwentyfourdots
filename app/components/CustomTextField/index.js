/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { pick } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    textFieldLabelNoWrap: {
        whiteSpace: "nowrap",
    },
    label: props => ({
      fontSize: props.isWideScreen ? '1.3rem' : '1rem',
      fontFamily: 'Gotham-medium'
    }),
    formControl: {
      
    }
}));

function useDebounce(value, wait = 0) {
    let [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let tid = setTimeout(() => setDebouncedValue(value), wait);

        return () => clearTimeout(tid);
    }, [value]);

    return debouncedValue;
}

const CustomTextField = React.memo((props) => {
    const { isWideScreen = true, textVariant, showErrorMsgOnTooltip = false, forceShowError = false } = props;
    const classes = useStyles({isWideScreen: isWideScreen});
    const [loaded, setLoaded] = useState(false);
    const [localValue, setLocalValue] = useState(props.value !== null ? props.value || "" : "");

    const importedProps = pick(props, [
        "autoComplete",
        "autoFocus",
        "children",
        "classes",
        "className",
        "defaultValue",
        "disabled",
        "FormHelperTextProps",
        "fullWidth",
        "id",
        "InputLabelProps",
        "inputProps",
        "InputProps",
        "inputRef",
        "label",
        "multiline",
        "name",
        //'onBlur',
        "onChange",
        "onFocus",
        "placeholder",
        "required",
        "rows",
        "rowsMax",
        "select",
        "SelectProps",
        "type",
        "style",
        "variant",
        "helperText",
        "formNoValidate",
        "title",
    ]);

   
    React.useEffect(() => {
        setLocalValue(props.value !== null ? props.value || "" : "");
    }, [props.value]);

    const useDebounceValue = useDebounce(localValue, props.debounceWait || 500);

    useEffect(() => {
        if (props.onChange) props.onChange(props.id, useDebounceValue, props);
    }, [useDebounceValue]);

    function changeValue(event) {
        if (props.onInstantChange) props.onInstantChange(event.target.value);

        setLocalValue(event.target.value);
    }

    function onFocus(e) {
        if (props.onFocus) props.onFocus(props.id);
    }

    function onKeyUp(e) {
        if (props.onKeyUp) props.onKeyUp(e);
    }

    function onKeyDown(e) {
        if (props.onKeyDown) props.onKeyDown(e);
    }

    function onBlur(event) {
        if (props.disabled || props.readOnly) {
            event.preventDefault();
            return;
        }

        if (props.onBlur) props.onBlur(props.id, localValue, props);
    }

    return (
        <TextField  
            {...importedProps}
            label={props.label}
            value={localValue}
            onChange={changeValue}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            value={localValue}
            //error={getError()}
            //helperText={getHelperText()}
            // error={!readOnly ? Boolean(importedProps.helperText) : false}
            // helperText={!readOnly && !showErrorMsgOnTooltip ? importedProps.helperText : null}
            InputProps={{
                classes: {
                  formControl: classes.formControl,
                },
            }}
            InputLabelProps={{
                className: classes.textFieldLabelNoWrap,
                classes: {
                  shrink: classes.label,
                },
                shrink: true,
            }}
        />
    );
});

export default CustomTextField;
