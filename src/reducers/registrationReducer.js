import { LOGIN } from "../actions/loginAction";

const initialState = {
  user: [
    {
      userName: "aa",
      bearer_token: "aa",
    },
  ],
  isLogged: false,
};

const registrationReduce = (state = initialState, action) => {
  switch (action.type) {
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
