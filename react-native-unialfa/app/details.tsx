import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DADOS_EVENTOS } from "../mocks/event";

export default function DetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const evento = DADOS_EVENTOS.find((item) => item.id === id) ?? DADOS_EVENTOS[0];

  function garantirIngresso() {
    Alert.alert("Ingresso garantido", "Evento adicionado ao seu carrinho.");
    router.push("/(tabs)/cart");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <FontAwesome name="chevron-left" size={16} color="#FFFFFF" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {evento.titulo}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: evento.imagem }} style={styles.image} />

        <Text style={styles.title}>{evento.titulo}</Text>

        <View style={styles.quickInfoBox}>
          <View style={styles.infoRow}>
            <FontAwesome name="calendar" size={16} color="#FFBE0B" />
            <Text style={styles.infoText}>{evento.data}</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="map-marker" size={16} color="#FFBE0B" />
            <Text style={styles.infoText}>{evento.local}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Sobre o evento</Text>
        <Text style={styles.description}>
          {evento.descricao} Esse evento tambem conta com certificado de participacao, espaco para
          networking e atividades praticas para voce aplicar o conteudo apresentado.
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buyButton} onPress={garantirIngresso}>
          <Text style={styles.buyButtonText}>Garantir Ingresso</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#130F26",
  },
  header: {
    backgroundColor: "#240046",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 14,
    gap: 14,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: 80,
  },
  backText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
  content: {
    padding: 20,
    paddingBottom: 120,
  },
  image: {
    width: "100%",
    height: 210,
    borderRadius: 14,
    marginBottom: 18,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 16,
  },
  quickInfoBox: {
    backgroundColor: "#2A1B4A",
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#4A3768",
    gap: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoText: {
    color: "#F8F7FF",
    fontSize: 15,
  },
  sectionTitle: {
    color: "#FFBE0B",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  description: {
    color: "#E2D7F4",
    lineHeight: 24,
    fontSize: 15,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#130F26",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#2F2250",
  },
  buyButton: {
    backgroundColor: "#FB5607",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
  },
  buyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
