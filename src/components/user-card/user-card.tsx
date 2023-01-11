import {StyleSheet, Text, View, Image} from "react-native";
import {RandomUser} from "../../data/use-random-user";

export const UserCard = (user: RandomUser) => {
    return (
        <View style={styles.container}>
            <View style={styles.profilePicContainer}>
                <Image
                    style={styles.profilePic}
                    source={{
                        uri: user.picture.thumbnail,
                    }}
                />
            </View>
            <View style={styles.card}>
                <Text>{user.name.title} {user.name.first} {user.name.last}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        position: "relative",
    },
    card: {
        backgroundColor: 'white',
        borderColor: '#f2f2f2f2',
        borderWidth: 2,
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.62,
        elevation: 6,
        padding: 20,
    },
    profilePicContainer: {
        position: "absolute",
        width: 50,
        height: 50,
    },
    profilePic: {
        borderRadius: 50,
        width: 50,
        height: 50,
    }
})
