import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [data, setData] = useState<ItemData>([]);

  useEffect(() => {
    fetchData();
  }, []);

  type ItemData = {
    id: string;
    name: string;
    length: number;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>API Usernames:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => (item.id)}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:60,
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    padding: 16,
    backgroundColor: '#25292e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#dc143c',
  },
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default App;