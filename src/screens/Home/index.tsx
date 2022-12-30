import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.eventNameTo}>To</Text>
        <Text style={styles.eventNameDo}>Do</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.status}>
        <View style={styles.containerStatus}>
          <Text style={styles.criadas}>Criadas</Text>
          <Text style={styles.statusCriadas}>0</Text>
        </View>

        <View style={styles.containerStatus}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <Text style={styles.statusCriadas}>0</Text>
        </View>
      </View>
    </View>
  );
}
