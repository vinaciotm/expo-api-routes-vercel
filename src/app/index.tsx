import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      const response = await fetch(`/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("@APP", data);

      if (!data || !data.success) {
        alert(
          "Check your credentials (try email: test@mail.com, password: 123123)"
        );
        return;
      }

      alert("Hello " + data.name);
    } catch (error) {
      console.error(error);

      alert("login faile");
    }
  }

  return (
    <View style={styles.container}>
      <Text>{process.env.NODE_ENV}</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 16,
  },
  input: {
    height: 54,
    width: "100%",
    backgroundColor: "#E3E3E3E3",
    borderRadius: 5,
    padding: 16,
  },
  button: {
    height: 54,
    width: "100%",
    backgroundColor: "#CECECE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
