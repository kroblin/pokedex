import React from "react";
import {StyleSheet, TextInput, Text, TouchableOpacity, View, Image} from "react-native";
import {getPokemon} from "../utils/PokeAPI";
import loadImage from "../assets/whosdat.png";

export default function PokemonSearch (props) {
  const {navigation, ...restProps} = props;

  const [searchInput, setSearchInput] = React.useState('');
  const [wantedPokemon, setWantedPokemon] = React.useState([]);

  const sendSearch = () => {
    getPokemon('https://pokeapi.co/api/v2/pokemon/'+ searchInput.toLowerCase())
      .then(data => {
      setWantedPokemon(data)
    })
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setSearchInput}
        onSubmitEditing={sendSearch}
        value={searchInput}
      />


      {(wantedPokemon.id !== undefined) ?
        <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('PokemonDetails', {
          pokemonDetails: wantedPokemon
        })}
      >
        <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: wantedPokemon.sprites.front_default}}
            />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{wantedPokemon.name}</Text>
        </View>
      </TouchableOpacity>
        :
        <Text>This pokemon doesn't exist !</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 100,
    height: 100,
    margin: 'auto'
  }
});
