import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {HomePage} from "./src/pages/home/home.page";

export default function App() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <HomePage/>
                <StatusBar style="auto"/>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
});
