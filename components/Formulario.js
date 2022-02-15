import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { Alert, Animated, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {
    //useState de Animated
    const [ animacionBoton ] = useState(new Animated.Value(1)) 
    //destructurar busqueda
    const {pais, ciudad } = busqueda

    const consultarClima = () => {
        if(pais.trim() === '' || ciudad.trim() === ''){
            mostrarAlerta()
        }
        setConsultar(true)
    }
    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Completa ambos campos para realizar la busqueda',
            [{text: 'Entendido'}]
        )
    }
    const animacionEntradada = () =>{
        Animated.spring(animacionBoton,{
            toValue: .8,
            useNativeDriver: true
        }).start()
    }
    const animacionSalida = () =>{
        Animated.spring(animacionBoton,{
            toValue: 1,
            friction: 1,
            tension: 30,
            useNativeDriver: true
        }).start()
    }
    const estiloAnimacion = {
        transform: [{ scale: animacionBoton }]
    }
    return (
        <>
            <View > 
                <View>
                    <TextInput
                        value={ ciudad }
                        style={ styles.input }
                        onChangeText={ ciudad => setBusqueda({...busqueda, ciudad}) }
                        placeholder='Ciudad'
                        placeholderTextColor='#666'
                    />
                </View>
                <View>
                    <Picker
                        selectedValue={ pais }
                        onValueChange={ pais => setBusqueda({...busqueda, pais}) }
                        itemStyle={{ height:120, backgroundColor: '#FFF'}}
                    >
                        <Picker.Item label="--Seleccione" value=""/>
                        <Picker.Item label="Estados Unidos" value="US"/>
                        <Picker.Item label="Mexico" value="MX"/>
                        <Picker.Item label="Argentina" value="AR"/>
                        <Picker.Item label="Colombia" value="CO"/>
                        <Picker.Item label="Costa Rica" value="CR"/>
                        <Picker.Item label="España" value="ES"/>
                        <Picker.Item label="Peru" value="PE"/>
                    </Picker>
                </View>

                <TouchableWithoutFeedback
                    onPressIn={ () => animacionEntradada()}
                    onPressOut={ () => animacionSalida()}
                    onPress={ () => consultarClima()}
                >
                    <Animated.View 
                        style={[ styles.btnBuscar, estiloAnimacion ]}
                    >
                        <Text style={styles.txtBuscar}>Buscar Clima</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    input:{
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize:20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnBuscar:{
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center'
    },
    txtBuscar:{
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})

export default Formulario