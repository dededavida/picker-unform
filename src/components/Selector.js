import { Ionicons } from "@expo/vector-icons";
import { useField } from "@unform/core";
import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function Selector({ name, ...rest }) {
  const pickerRef = useRef(null);
  const [option, setOption] = useState("");
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      path: "props.value",
      clearValue(ref) {
        ref.props.onValueChange(ref.props.placeholder.value);
      },
      getValue(ref) {
        return ref.props.value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <RNPickerSelect
      {...rest}
      ref={pickerRef}
      value={option}
      doneText="Select"
      onValueChange={setOption}
      useNativeAndroidPickerStyle={false} //only android
      style={{
        ...pickerSelectStyles,
      }}
      Icon={() => {
        //use your icon if you prefer
        return <Ionicons name="md-arrow-down" size={24} color="gray" />;
      }}
    />
  );
}
const pickerSelectStyles = StyleSheet.create({
  placeholder: {
    color: "#000",
  },
  inputIOS: {
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: 15,
    borderColor: "#fff",
    borderWidth: 2,
    marginTop: 5,
  },
  inputAndroid: {
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: 15,
    borderColor: "#fff",
    borderWidth: 2,
    marginTop: 5,
  },
  iconContainer: {
    top: Platform.OS == "ios" ? 15 : 21,
    right: 20,
  },
});
