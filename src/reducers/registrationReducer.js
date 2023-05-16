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

    default:
      return state;
  }
};
export default registrationReduce;
