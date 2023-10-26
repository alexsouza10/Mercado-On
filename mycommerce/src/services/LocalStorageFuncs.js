/*export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

// Armazenar um objeto no localStorage
const user = {
  name: 'John',
  email: 'john@example.com',
  pass: 'secret123',
  img: 'profile.jpg',
  cpf: '12345678901'
};
setItem('usuario', user);


// Recuperar os dados do localStorage
const user = getItem('usuario');

// Verificar se os dados foram recuperados com sucesso
if (user) {
  // Os dados existem, você pode usá-los
  console.log(user.name);  // Saída: John
  console.log(user.email); // Saída: john@example.com
} else {
  // Os dados não existem no localStorage
  console.log('Nenhum usuário encontrado.');
}
*/


// Defina suas funções getItem e setItem
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Armazene um objeto no localStorage
const userToStore = {
  name: '',
  email: '',
  pass: '',
  img: '',
  cpf: '111.111.111-11'
};

setItem('usuario', userToStore);

// Recupere os dados do localStorage
const userFromStorage = getItem('usuario');

// Verifique se os dados foram recuperados com sucesso
if (userFromStorage) {
  // Os dados existem, você pode usá-los
  console.log(userFromStorage.name);  // Saída: John
  console.log(userFromStorage.email); // Saída: john@example.com
} else {
  // Os dados não existem no localStorage
  console.log('Nenhum usuário encontrado.');
}
