import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
    const router = useRouter();

    const [secureText, setSecureText] = useState(true);

    function trocarEstadoSenha() {
        if (secureText === true) {
            setSecureText(false);
        }else {
            setSecureText(true);
        }
    }

    function logar() {
        router.replace("/(tabs)/home")
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.innerContainer}>
                <Ionicons 
                    name="ticket-outline" 
                    size={64} 
                    color={"#FFBE0B"}
                    style={styles.logo} 
                />
                <Text style={styles.title}>Easy Ticket</Text>
                <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>

                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="email@example.com"
                    keyboardType="email-address"
                />

                <Text style={styles.label}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput 
                        style={styles.passwordInput}
                        placeholder="*********"
                        secureTextEntry={secureText} 
                    />
                    <TouchableOpacity 
                        onPress={trocarEstadoSenha}
                        style={styles.iconContainer}
                    >
                        <Ionicons
                            name={secureText ? "eye-off-outline" : "eye-outline"}
                            size={20}
                            color={"#CDB4DB"}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={logar}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#130F26"
    },
    innerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    logo: {
        marginBottom: 10
    },
    title: {
        fontSize: 29,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 8
    },
    subtitle: {
        color: "#D9C8F0",
        marginBottom: 30,
        fontSize: 14
    },
    label: {
        alignSelf: "flex-start",
        fontSize: 14,
        fontWeight: '600',
        color: '#D9C8F0',
        marginBottom: 5,
    },
    input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#6A4C93",
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#FFFFFF",
        backgroundColor: "#2A1B4A",
        marginBottom: 15
    },
    passwordContainer: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#6A4C93",
        borderRadius: 12,
        backgroundColor: "#2A1B4A",
        marginBottom: 10,
        overflow: "hidden"
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#FFFFFF"
    },
    iconContainer: {
        justifyContent: "center",
        paddingHorizontal: 15
    },
    button: {
        width: "100%",
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: "#FB5607"
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#FFF"
    }
})