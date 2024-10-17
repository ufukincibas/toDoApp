import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { // `Container` büyük harfle başlamamalı
    flex: 1,
    justifyContent: 'center', // Butonu alta taşımak için
    padding: 20,
    backgroundColor:"red",
  },
  input: {
    borderColor: "#red",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20, // Input ile button arasında boşluk
  },
});
