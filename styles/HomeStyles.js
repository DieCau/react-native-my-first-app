import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 700,
  },
  imagen: {
    height: 280,
    width: 280,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#3b5998',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic',
  },
})