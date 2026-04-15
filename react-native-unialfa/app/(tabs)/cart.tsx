import { FontAwesome } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DADOS_EVENTOS } from "../../mocks/event";
import { Event } from "../../types/event";

export default function CartScreen() {
  const [itensCarrinho, setItensCarrinho] = useState<Event[]>([
    DADOS_EVENTOS[0],
    DADOS_EVENTOS[2],
  ]);

  const total = useMemo(() => {
    const totalNumerico = itensCarrinho.reduce((acumulador, item) => {
      const somenteNumeros = item.preco.replace(/[^\d,]/g, "").replace(",", ".");
      const valor = Number(somenteNumeros);
      return Number.isNaN(valor) ? acumulador : acumulador + valor;
    }, 0);

    return totalNumerico.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }, [itensCarrinho]);

  function removerItem(id: string) {
    setItensCarrinho((valorAtual) => valorAtual.filter((item) => item.id !== id));
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meu Carrinho</Text>
        <Text style={styles.subtitle}>{itensCarrinho.length} itens</Text>
      </View>

      <FlatList
        data={itensCarrinho}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>Seu carrinho esta vazio.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {item.titulo}
              </Text>
              <Text style={styles.itemText}>{item.data}</Text>
              <Text style={styles.itemText}>{item.local}</Text>
              <Text style={styles.price}>{item.preco}</Text>
            </View>
            <TouchableOpacity style={styles.trashButton} onPress={() => removerItem(item.id)}>
              <FontAwesome name="trash" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>{total}</Text>
        </View>
        <TouchableOpacity style={styles.finishButton}>
          <Text style={styles.finishText}>Finalizar Compra</Text>
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
    paddingBottom: 160,
    gap: 12,
  },
  card: {
    backgroundColor: "#2A1B4A",
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  itemTitle: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
  itemText: {
    color: "#D9C8F0",
    fontSize: 12,
  },
  price: {
    marginTop: 4,
    color: "#FFBE0B",
    fontWeight: "700",
    fontSize: 14,
  },
  trashButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E63946",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyBox: {
    backgroundColor: "#2A1B4A",
    padding: 18,
    borderRadius: 12,
  },
  emptyText: {
    color: "#F8F7FF",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#1E1636",
    borderTopWidth: 1,
    borderTopColor: "#3A2C5E",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  totalLabel: {
    color: "#D9C8F0",
    fontSize: 15,
  },
  totalValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
  finishButton: {
    backgroundColor: "#FB5607",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
  },
  finishText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});
