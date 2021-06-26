import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const user = ref(projectAuth.currentUser)

// nasłuchiwanie na zmiany auth

projectAuth.onAuthStateChanged(_user => {
  console.log('Zmiana statusu użytkownika. Bieżący użytkownik to: ', _user)
  user.value = _user
});

const getUser = () => {
  return { user } 
}

export default getUser