const ADD_PERSON = "ADD_PERSON";
const GET_PEOPLE = "GET_PEOPLE";

const initialState = {
  people: [
    {
      name: "Bill",
      age: 44,
      city: "Chi-Town"
    },

    {
      name: "Janice",
      age: 19,
      city: "New Brunswick"
    },

    {
      name: "Jerry Chung Lee",
      age: 13,
      city: "Brooklynzhen"
    }
  ]
};

export function addPerson(newPerson) {
  console.log(newPerson);
  return {
    type: ADD_PERSON,
    payload: newPerson
  };
}

export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: true
  };
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      let newPerson = action.payload;
      console.log(newPerson);

      return {
        ...state,
        people: [...state.people, newPerson]
      };

    case GET_PEOPLE:
      return state;

    default:
      return state;
  }
}
