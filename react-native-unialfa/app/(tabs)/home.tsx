import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { DADOS_EVENTOS } from '../../mocks/event';
import { Event } from '../../types/event';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type RenderizarEventoProps = {
  item: Event;
}

export default function HomeScreen() {
  const router = useRouter();

  const renderizarEvento = ({ item }: RenderizarEventoProps) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imagem }} style={styles.imagemCapa} />
    
    <View style={styles.infoContainer}>
      <Text style={styles.dataTexto}>{item.data}</Text>
      <Text style={styles.tituloTexto} numberOfLines={2}>{item.titulo}</Text>
      <Text style={styles.localTexto}>{item.local}</Text>
      
      <View style={styles.rodapeCard}>
        <Text style={styles.precoTexto}>{item.preco}</Text>
        <TouchableOpacity
          style={styles.botaoComprar}
          onPress={() => router.push(`/details?id=${item.id}`)}
        >
          <FontAwesome name="info-circle" size={18} color="white" />
          <Text style={styles.textoBotao}>Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Descubra Eventos</Text>
        <TextInput 
          style={styles.inputBusca}
          placeholder="Buscar eventos, shows, cursos..."
          placeholderTextColor="#B9A9D4"
        />
      </View>

      <FlatList
        data={DADOS_EVENTOS}
        keyExtractor={(item) => item.id}
        renderItem={renderizarEvento}
        contentContainerStyle={styles.listaContainer}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F26',
  },
  header: {
    padding: 20,
    backgroundColor: '#240046',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  inputBusca: {
    backgroundColor: '#3C096C',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#FFFFFF',
  },
  listaContainer: {
    padding: 20,
    paddingBottom: 90,
  },
  card: {
    backgroundColor: '#2A1B4A',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemCapa: {
    width: '100%',
    height: 160,
  },
  infoContainer: {
    padding: 15,
  },
  dataTexto: {
    color: '#FFBE0B',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  tituloTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8F7FF',
    marginBottom: 8,
  },
  localTexto: {
    fontSize: 14,
    color: '#CEBEE9',
    marginBottom: 15,
  },
  rodapeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: '#4A3768',
    paddingTop: 15,
  },
  precoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  botaoComprar: {
    backgroundColor: '#FB5607',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});