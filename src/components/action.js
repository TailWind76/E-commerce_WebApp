export const saveData = (data) => {
    return {
      type: 'SET_DATA',
      payload: data,
    };
  };