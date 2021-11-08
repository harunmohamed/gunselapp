import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground 
            source={require('../../assets/images/ModelX.jpeg')} 
            style={styles.image}/>

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $69,420</Text>
            </View>

            <StyledButton 
            type="primary" 
            content={"Custom Order"} 
            onPress={() => {
                console.warn('Custom Order is being Processed')
            }} />

            <StyledButton 
            type="secondary" 
            content={"Existing Inventory"} 
            onPress={() => {
                console.warn('Redirecting to Existing Inventory')
            }} />
    </View>
    );
};

export default CarItem;

