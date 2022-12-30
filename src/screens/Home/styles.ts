import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 40
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  eventNameTo: {
    color: '#4EA8DE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginRight: 4
  },
  eventNameDo: {
    color: '#5E60CE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  criadas: {
    color: '#4EA8DE',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 14,
    marginRight: 10
  },
  statusCriadas:{
    color: '#D9D9D9',
    backgroundColor: '#333333',
    fontSize: 12,
    borderRadius: 50,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5
  },
  concluidas: {
    color: '#8284FA',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 14,
    marginRight: 10
  }
})