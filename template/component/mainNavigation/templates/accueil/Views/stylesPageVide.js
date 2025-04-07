<<<<<<< HEAD
import { StyleSheet } from 'react-native';

=======
import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
>>>>>>> 3da4c8d (repush)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    header: {
<<<<<<< HEAD
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    message: {
        fontSize: 16,
=======
        fontSize: width * 0.02,
        fontWeight: 'bold',
        marginBottom: width*0.01,
        color: '#333',
    },
    message: {
        fontSize: width*0.01,
>>>>>>> 3da4c8d (repush)
        color: '#666',
    }
});

export default styles;