import { LOGIN_USER } from "../actions/loginAction";

const initialState = {
  user: [
    {
      id: "",
      username: "",
      email: "",
      password: "",
      role: "",
      bearerToken: "",
    },
  ],
};

const registrationReduce = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };

    /* return {
        ...state,
        commenti: action.payload.reverse(),
      };*/

    /*case LOGIN:
      return {
        //modifica lo stato user cambiando username con quello inserito in fase di registrazione ed il bearer token inserendo quello
        //ricevuto in risposta dalla chiamata login(ancora da fare)
        ...state,
        user: action.payload,
        isLogged: (state.isLogged = true),
      };
*/
    default:
      return state;
  }
};
export default registrationReduce;
