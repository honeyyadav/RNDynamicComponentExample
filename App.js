import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const renderObject = {
  type : "View",
  children : [
    {
      type: "View",
      styles: {
        backgroundColor: "orange",
        flex:1,
        justifyContent:"center",
        alignItems: "center"
      },
      children: [
        {
          type: "Text",
          styles: {
            color: "yellow",
            fontSize: 20
          },
          text: "Hello"
        },
        {
          type: "View",
          styles: {
            backgroundColor: "red",
            width: 100,
            height: 5,
            marginTop: 10
          },
          children: []
        }
      ]
    },
    {
      type: "View",
      styles: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
      },
      children: [
        {
          type: "Text",
          styles: {
            color: "red",
            fontSize: 40
          },
          text: "Helllo"
        }
      ]
    },
    {
      type: "View",
      styles: {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "green"
      },
      children: [
        {
          type: "Text",
          styles: {
            color: "white",
            fontSize: 80
          },
          text: "Hellllo"
        }
      ]
    }
  ],
  styles: {
    flex:1
  }
}

const CustomComp = (props) => {
  const {type} = props;
  if(type == "View"){
    const {styles, children} = props;
    return <View style={styles}>{children.map((item) => CustomComp(item))}</View>
  } else if(type == "Text") {
    const {styles, text} = props;
    return <Text style={styles} >{text}</Text>
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      {CustomComp(renderObject)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
