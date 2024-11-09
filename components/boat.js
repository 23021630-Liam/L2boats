import Icon from "react-native-vector-icons/Fontisto";
import {View, Text, Image} from 'react-native';


const Boat = ({name, description, icon_name, picture})=> {
    return (

        <View>
            <Text style={{fontSize:30, color:"skyblue", backgroundColor:"lightgrey",
                textAlign:"center", borderWidth: 3, borderColor:"turquoise"}}>
                <Icon name={icon_name} size={30} color="#B23B23" />{name}
            </Text >
            <Text style={{fontSize:15, color:"blue", textAlign:"center"}}> {description}</Text>
            <Image source={picture} style={{width:400, height:500}}/>
        </View>
    );
};

export default Boat;
