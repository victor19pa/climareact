import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Clima = ({resultado}) => {
    //console.log(resultado)
    const { name, main }= resultado

    if(!name) return null;
    //grados kelvin
    const kelvin = 273.15

    return (
        <View style={styles.clima}> 
            {/* Temperatura con su estilo */}
            <Text style={[styles.texto, styles.actual]}>{ parseInt( main.temp - kelvin)}
                <Text style={styles.temperatura}>
                    &#x2103;
                </Text>
                {/* Icono */}
                <Image
                    style={{width: 66, height: 58}}
                    source={{uri: `http://openweathermap.org/img/w/${resultado.weather[0].icon}.png`}}
                />
            </Text>
            {/* Temperatura max y min */}
            <View style={styles.temperaturas}>
                <Text style={styles.texto}> MIN {' '}
                    <Text style={styles.temperatura}>
                        { parseInt(main.temp_min - kelvin) }&#x2103;
                    </Text>
                </Text>
                <Text style={styles.texto}> MAX {' '}
                    <Text style={styles.temperatura}>
                        { parseInt(main.temp_max - kelvin) }&#x2103;
                    </Text>
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    clima:{
        marginBottom: 20
    },
    texto:{
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20
    },
    actual:{
        fontSize: 80,
        marginRight: 0,
        fontWeight: 'bold'
    },
    temperatura:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    temperaturas:{
        flexDirection: 'row',
        justifyContent: 'center'
    }
})
export default Clima