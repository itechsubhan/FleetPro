import React from 'react';
import { View, Text, Image } from 'react-native';

const DetailsScreen = () => {
    return (
        <View>
            <Text>Details Screen</Text>
            <View>
                <Text>Add your content here</Text>
                {/* Add your context here */}
                <Text>This is where you can add additional details or information.</Text>
            </View>
            <View>
                <Image source={require('../assets/car_assets/car_1.jpg')} />
                <Text>Card Details</Text>
                <Text>Additional details about the card.</Text>
            </View>
        </View>
    );
};

export default DetailsScreen;
