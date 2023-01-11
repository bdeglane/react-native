import {Alert, Modal, StyleSheet, FlatList, Text, Pressable, View, ScrollView} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRandomUser} from "../../data/use-random-user";
import {UserCard} from "../../components/user-card/user-card";


export const HomePage = () => {
    const {users} = useRandomUser()

    const renderItem = ({ item }) => (
        <UserCard {...item} />
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={user => user.login.uuid}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
