import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';


export default function App() { 

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        api.get('repositories').then(response => {
            console.log(response.data);
            setRepositories(response.data);
        });
    }, []);

    return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <View style={styles.container} >
            <Text style={styles.title}>Hello Stack</Text>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title : {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});