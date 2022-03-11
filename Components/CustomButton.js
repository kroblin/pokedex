import {Button, StyleSheet} from 'react-native';

export default function CustomButton(props) {

  const {color, setTextParent, title, ...restProps} = props;

  return (
    <Button
      onPress={() => setTextParent(title)}
      title= {title}
      color= {color}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
