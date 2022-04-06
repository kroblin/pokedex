import {FlatList, StyleSheet, View} from 'react-native';
import PokemonThumbnail from "../Components/PokemonThumbnail"
import {useState, useEffect} from "react";
import {getPokemons} from "../utils/PokeAPI";

export default function App(props) {
  const {navigation, ...restProps} = props;

  const [PokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    loadPokemons(nextPage)
  }, [])

  const loadPokemons = (url) => {
    getPokemons(url).then(data => {
      setPokemonList([...PokemonList, ...data.results])
      setNextPage(data.next)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={PokemonList}
        numColumns={3}
        keyExtractor={item => item.name}
        renderItem={({item}) => <PokemonThumbnail navigation={navigation} name={item.name} url={item.url} />}
        onEndReached={() => {
          loadPokemons(nextPage)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  text: {
    height: 20,
    textAlign: "center"
  },
});
