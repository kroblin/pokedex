import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import {TextInput} from "react-native-web";

export default function PokemonDetails(props) {
  const {pokemonDetails, ...restProps} = props
  const pokemonInfo = props.route.params.pokemonDetails

  return (
    <View style={style.view}>
      <Text style={style.name}>{pokemonInfo.name}</Text>
      <View style={[style.sprites, style.container]}>
        <Image
          style={style.sprite}
          source={{uri: pokemonInfo.sprites.front_default}} />
        <Image
          style={style.sprite}
          source={{uri: pokemonInfo.sprites.front_shiny}} />
      </View>
      <View style={[style.types, style.container]}>
        <Text style={style.section_title}>Type</Text>
        <FlatList
          data={pokemonInfo.types}
          keyExtractor={item => item.slot}
          renderItem={({item}) => <Text>{item.type.name}</Text>}
        />
      </View>
      <View style={[style.abilities, style.container]}>
        <Text style={style.section_title}>Default abilities</Text>
        <FlatList
          style={style.ability}
          data={pokemonInfo.abilities}
          keyExtractor={item => item.slot}
          renderItem={({item}) => <Text>{item.ability.name}</Text>}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    marginTop: 10,
    borderRadius: 10
  },
  name: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 36,
    fontWeight: "bold"
  },
  sprites: {
    width: "100%",
    borderRadius: 10,
    margin: "auto",
    textAlign: "center",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  sprite: {
    width: 150,
    height: 150,
  },
  types: {
    marginTop: 5,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
  },
  abilities: {
    width: "100%",
  },
  section_title: {
    textTransform: "uppercase",
    fontWeight: "bold"
  }

})
