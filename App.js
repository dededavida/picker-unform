import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import logo from "./assets/unform.png";
import Input from "./src/components/Input";
import Selector from "./src/components/Selector";
import { Form } from "@unform/mobile";

export default function App() {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    console.log(data);
    reset();
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={logo} style={styles.logo} />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Selector
          name="state"
          items={[
            { label: "São Paulo", value: "SP" },
            { label: "Rio de Janeiro", value: "RJ" },
          ]}
          placeholder={{
            label: "Select the state",
            value: "",
          }}
        />
        <Text style={styles.text}>Full name</Text>
        <Input name="name" />
        <TouchableHighlight
          style={styles.button}
          onPress={() => formRef.current.submitForm()}
          underlayColor="#f76"
        >
          <Text style={styles.buttonText}>SEND</Text>
        </TouchableHighlight>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8b10ae",
    justifyContent: "center",
    alignItems: "stretch",
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    marginTop: 15,
    color: "#fff",
  },
  logo: {
    width: 120,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#f82",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
