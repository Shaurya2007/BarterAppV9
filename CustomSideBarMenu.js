import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'
import {Avatar} from 're'

export default class CustomSideBarMenu extends Component{
    
    constructor(){
        super()
    this.state={
        userId:firebase.auth().currentUser.email,
        image:'#',
        name:'',
        docId:''
       }
    }
   
    render(){
        return(
            <View style={{flex:1}}>
             <View style={{flex:5,alignItems:'center',background:'orange'}}>
             <Avatar
             rounded
             source={{
                 uri:this.state.image
             }}
             size='medium'
             onPress={()=>{
                 this.selectPicture()
             }}
             showEditButton
             /> 
             </View>
            </View>
             <View style={styles.container}>
             <View style = {styles.drawerItemsContainer}>
             <DrawerItems {...this.props}/>

             <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
             <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
             onPress={()=>{
                 this.props.navigation.navigate('SignupLoginScreen')
                 firebase.auth().signOut()
             }}>
             <Text>LogOut</Text>
             </TouchableOpacity>
             </View>
             </View>
             </View>
        )
    }
}

