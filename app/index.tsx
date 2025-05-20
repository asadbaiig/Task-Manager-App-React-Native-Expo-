import {View, Text, StyleSheet} from 'react-native'

import {Link} from "expo-router"


const Index = ()=>{

return (

<View style={{ backgroundColor: "#f8f8f8", flex:1, justifyContent:"center",
alignItems: "center" }}>

<Text>This is the main page</Text>

<Text><Link href="./about" >Go to about</Link></Text>

</View>

)

}

export default Index;