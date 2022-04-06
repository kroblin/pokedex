import { View, Text, Image, StyleSheet } from 'react-native'

export default function PokemonDetails(props) {
  const {pokemonDetails, ...restProps} = props
  const pokemonInfo = props.route.params.pokemonDetails


  return (
    <View style={style.view}>
      <Text style={style.name}>{pokemonInfo.name}</Text>
      <Image
        style={style.sprite}
        source={{uri: pokemonInfo.sprites.front_default}} />
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    textAlign: "center",
    margin: 'auto',
  },
  name: {
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  sprite: {
    width: 100,
    height: 100,
    display: "flex"
  }
})
