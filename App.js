import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ToastAndroid } from "react-native";

export default function App() {
  const [id, setID] = useState("");
  const [getName, setGetName] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const [showMethod, setShowMethod] = useState(null);

  const fetchUser = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((response) => response.json())
      .then((json) => setGetName(json.employee_name));
  };

  const addUser = () => {
    fetch("https://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        salary: job,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        ToastAndroid.show(
          "Created object at id: " + json.id,
          ToastAndroid.SHORT
        );
      });
  };

  const updateUser = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        salary: job,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        ToastAndroid.show("Updated object", ToastAndroid.SHORT);
      });
  };

  const deleteUser = () => {
    fetch(`https://dummy.restapiexample.com/api/v1/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        ToastAndroid.show("Deleted object", ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      {showMethod === null && <Text style={styles.header}>API</Text>}
      {showMethod === "GET" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>GET method!</Text>
          <TextInput
            placeholder="ID"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <Button
            title="Fetch"
            onPress={fetchUser}
            color="#6EB4D5"
          />
          <Text>Name: {getName}</Text>
        </View>
      )}
      {showMethod === "POST" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>POST method!</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Job"
            style={styles.input}
            value={job}
            onChangeText={setJob}
          />
          <Button
            title="Post"
            onPress={addUser}
            color="#6EB4D5"
          />
        </View>
      )}

      {showMethod === "PUT" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>PUT method!</Text>
          <TextInput
            placeholder="Id"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
         ```jsx
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Job"
            style={styles.input}
            value={job}
            onChangeText={setJob}
          />
          <Button
            title="Update"
            onPress={updateUser}
            color="#6EB4D5"
          />
        </View>
      )}
      {showMethod === "DELETE" && (
        <View style={styles.methodContainer}>
          <Text style={styles.header}>DELETE method!</Text>
          <TextInput
            placeholder="Id"
            style={styles.input}
            value={id}
            onChangeText={setID}
          />
          <Button
            title="Delete"
            onPress={deleteUser}
            color="#6EB4D5"
          />
        </View>
      )}
      <View style={styles.optionsButton}>
        <Button
          title="GET"
          style={styles.button}
          onPress={() => setShowMethod("GET")}
          color="#6EB4D5"
        />
        <Button
          title="POST"
          style={styles.button}
          onPress={() => setShowMethod("POST")}
          color="#6EB4D5"
        />
        <Button
          title="PUT"
          style={styles.button}
          onPress={() => setShowMethod("PUT")}
          color="#6EB4D5"
        />
        <Button
          title="DELETE"
          style={styles.button}
          onPress={() => setShowMethod("DELETE")}
          color="#6EB4D5"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#335EA1",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
  },
  input: {
    borderWidth: 2,
    width: 300,
    margin: 10,
    borderStyle: "solid",
    borderColor: "black",
    fontSize: 20,
    padding: 10,
  },
  optionsButton: {
    flexDirection: "row",
    gap: 10,
    position: "absolute",
    bottom: 60,
  },
  methodContainer: {
    position: "absolute",
    top: 70,
  },
});
