import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Bilhete = {
  id: string;
  titulo: string;
  data: string;
  local: string;
  codigo: string;
  imagem: string;
};

const DADOS_BILHETES: Bilhete[] = [
  {
    id: "b1",
    titulo: "The Developers Life Weekend",
    data: "Sáb, 14 Mar • 09:00",
    local: "Centro de Convenções - Curitiba, PR",
    codigo: "TKT-2026-A1B2",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5drOCJglv1V9G8aCImU84eKAXp3I5MnEbg&s",
  },
  {
    id: "b2",
    titulo: "Latinoware 2026",
    data: "Sex, 10 Abr • 19:00",
    local: "Auditório Principal - Campus",
    codigo: "TKT-2026-K9M4",
    imagem: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60",
  },
];

export default function TicketsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Bilhetes</Text>
        <Text style={styles.subtitle}>{DADOS_BILHETES.length} bilhetes</Text>
      </View>

      <FlatList
        data={DADOS_BILHETES}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text style={styles.itemTitle}>{item.titulo}</Text>
            <Text style={styles.itemText}>{item.data}</Text>
            <Text style={styles.itemText}>{item.local}</Text>
            <View style={styles.codeBox}>
              <Text style={styles.codeLabel}>Codigo do bilhete</Text>
              <Text style={styles.codeText}>{item.codigo}</Text>
            </View>
          </View>
        )}
      />
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
    paddingVertical: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 26,
    color: "#FFFFFF",
    fontWeight: "800",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#D9C8F0",
    fontWeight: "600",
  },
  listContent: {
    padding: 20,
    paddingBottom: 90,
    gap: 14,
  },
  card: {
    backgroundColor: "#2A1B4A",
    borderRadius: 14,
    overflow: "hidden",
    paddingBottom: 12,
  },
  image: {
    width: "100%",
    height: 140,
    marginBottom: 10,
  },
  itemTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
    paddingHorizontal: 12,
    marginBottom: 5,
  },
  itemText: {
    color: "#D9C8F0",
    fontSize: 13,
    paddingHorizontal: 12,
    marginBottom: 3,
  },
  codeBox: {
    marginTop: 10,
    marginHorizontal: 12,
    backgroundColor: "#3C096C",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#7B2CBF",
  },
  codeLabel: {
    color: "#FFBE0B",
    fontSize: 12,
    marginBottom: 4,
  },
  codeText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 14,
  },
});
