import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileCard = () => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };
    return (
        <View style={styles.cardContainer}>
            <Image
                source={require('../../assets/images/asad.jpg')}
                style={styles.profileImage}
            />
            <Text style={styles.name}>Asad Baig</Text>
            <Text style={styles.description}>Software Engineer</Text>
            <TouchableOpacity
                style={[styles.button, isFollowing && styles.followingButton]}
                onPress={handleFollowClick}
            >
                <Text style={[styles.buttonText, isFollowing && styles.followingButtonText]}>
                    {isFollowing ? 'Following' : 'Follow'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    cardContainer: {
        width: 250,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        alignItems: 'center',
        margin: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'blue', // default button color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    followingButton: {
        backgroundColor: 'white', // color when following
        borderWidth: 1,
        borderColor: 'blue',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    followingButtonText: {
        color: 'blue', // text color when following
    },
});

export default ProfileCard;
