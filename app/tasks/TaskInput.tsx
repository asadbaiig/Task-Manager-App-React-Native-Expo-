import { useState } from "react";
import { View,Text,TouchableOpacity,TextInput,ScrollView,StyleSheet,ImageBackground,Dimensions} from "react-native";

const { width, height } = Dimensions.get("window");

export default function TaskList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const addTask = () => {
    if (newTask.trim().length > 0) {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask("");
      setIsInputVisible(false);
    }
  };

  const deleteTask = (index: number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  const startEditingTask = (index: number, task: string) => {
    setEditingTaskId(index);
    setEditedTaskText(task);
  };

  const saveEditedTask = (index: number) => {
    if (editedTaskText.trim().length > 0) {
      setTasks(prevTasks => prevTasks.map((task, i) => (i === index ? editedTaskText : task)));
      setEditingTaskId(null);
      setEditedTaskText("");
    }
  };
  return (
    <ImageBackground 
      source={require("../../assets/images/deer.png")}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.title}>Your Tasks ({tasks.length})</Text> 
        <ScrollView style={styles.taskList}>
          {tasks.map((task, index) => (
            <View key={index} style={styles.taskItem}>
              {editingTaskId === index ? (
                <TextInput 
                  style={styles.input} 
                  value={editedTaskText} 
                  onChangeText={setEditedTaskText} 
                  onSubmitEditing={() => saveEditedTask(index)}
                  autoFocus
                />
              ) : (
                <Text style={styles.taskText}>{task}</Text>
              )}
              <View style={styles.taskActions}>
                <TouchableOpacity 
                  style={styles.editButton} 
                  onPress={() => startEditingTask(index, task)}>
                  <Text style={styles.buttonText}>✎</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.deleteButton} 
                  onPress={() => deleteTask(index)}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        {!isInputVisible && (
          <TouchableOpacity 
            style={styles.addButton} 
            onPress={() => setIsInputVisible(true)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        )}
        {isInputVisible && (
          <TextInput
            style={styles.input}
            placeholder="Enter new task..."
            placeholderTextColor="#aaa"
            value={newTask}
            onChangeText={setNewTask}
            onSubmitEditing={addTask}
          />
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,  
    height: height, 
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding: 20,
    borderRadius: 10,
    width: "90%",
    minHeight: "70%",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  taskList: {
    flex: 1,
    width: "100%",
  },
  taskItem: {
    backgroundColor: "white",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskText: {
    fontSize: 16,
  },
  taskActions: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    opacity: 0.9,
  },
  addButtonText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginTop: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    flex: 1,
  },
});