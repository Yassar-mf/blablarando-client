import { TextInput, View, Text } from 'react-native';
import styles from '../styles'
const CustomFiltreAchatItem = ({ setFiltre, filtre, titre }) => {
    return (
        <View>
            <Text>
                {titre}
            </Text>
            <TextInput 
                placeholder={filtre?.toString() || ''}
                onChangeText={text => setFiltre(text)}
                style={styles.inpS}
            />
        </View>
    );
};

export default CustomFiltreAchatItem;
