import { View, Text, StyleSheet,Pressable } from 'react-native';
const GoalItem = ({title,onDelete,id}) => {
    return (
        <Pressable onPress={()=>onDelete(id)} style={({pressed})=> pressed && styles.pressed}>
        <View style={styles.listItem}>
            <Text>{title}</Text>
        </View>
        </Pressable>

)
}
export default GoalItem

const styles= StyleSheet.create({
    listItem:{
        backgroundColor:'#D3D3D3',
        borderWidth:1,
        marginTop:10,
        padding:10
    },
    pressed:{
        opacity:0.75
    }
})