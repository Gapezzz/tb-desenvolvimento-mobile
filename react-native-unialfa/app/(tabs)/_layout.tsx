import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: "#240046",
                borderTopWidth: 0,
                height: 70,
                paddingBottom: 8,
                paddingTop: 8
            },
            tabBarActiveTintColor: "#FFBE0B",
            tabBarInactiveTintColor: "#CDB4DB"
        }}>
            <Tabs.Screen 
                name="home" 
                options={{ 
                    title: "Eventos",
                    tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} /> 
                }} 
            />

            <Tabs.Screen 
                name="cart" 
                options={{ 
                    title: "Carrinho",
                    tabBarIcon: ({ color }) => <FontAwesome name="shopping-cart" size={24} color={color} /> 
                }} 
            />

            <Tabs.Screen 
                name="tickets" 
                options={{ 
                    title: "Bilhetes",
                    tabBarIcon: ({ color }) => <FontAwesome name="ticket" size={24} color={color} /> 
                }} 
            />

            <Tabs.Screen 
                name="profile" 
                options={{ 
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> 
                }} 
            />
        </Tabs>
    )
}