export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const items = [...state.people, action.payload];
      return {
        ...state,
        people: items,
        isModalOpen: true,
        modalText: 'item added',
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      };
    case 'REMOVE_ITEM':
      const item = state.people.filter((p) => p.id !== action.payload);
      return {
        ...state,
        people: item,
        isModalOpen: true,
        modalText: 'item removed',
      };
    default:
      return {
        ...state,
        isModalOpen: true,
        modalText: 'Please Enter Value',
      };
  }
};
