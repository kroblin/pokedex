import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState} from "react";
import loadImage from "../assets/whosdat.png"
import {getPokemon} from "../utils/PokeAPI";

export default function PokemonThumbnail(props) {
  const {name, url, navigation, ...restProps} = props;
  const [pokemonTile, setPokemonTile] = useState(["Default"])

  useEffect(() => {
    loadPokemon(url)
  }, [])

  const loadPokemon = (url) => {
    getPokemon(url).then(data => {
      setPokemonTile(data)
    })
  }
  return (
    <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('PokemonDetails')}
    >
      <View style={styles.imageContainer}>
        {(pokemonTile.sprites !== undefined) ? (
            (url === 'https://pokeapi.co/api/v2/pokemon/393/' ||
              url === 'https://pokeapi.co/api/v2/pokemon/396/') ? (
            <Image
            style={styles.image}
            source={{uri: pokemonTile.sprites.front_shiny}}
          />) : (
            <Image
            style={styles.image}
            source={{uri: pokemonTile.sprites.front_default}}
          />)
        ) : (
          <Image
            style={styles.image}
            source={loadImage}
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "33.33%",
    maxWidth: 200,
    height: 150,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5
  },
  imageContainer: {
    height: "80%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowColor: "black"
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    textTransform: 'capitalize',
    textAlign: 'center',
    padding: 5
  },
  image: {
    width: 100,
    height: 100,
    margin: 'auto'
  },
  text: {
    textAlign: 'center'
  }
});
