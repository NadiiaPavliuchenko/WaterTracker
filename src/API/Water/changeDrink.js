import axios from 'axios';

export const addDrink = async (drink) => {
  const { data } = await axios.post('/water/drinks', drink);
  return data;
};

export const deleteDrink = async (drinkId) => {
  const { data } = await axios.delete(`/water/drinks/${drinkId}`);
  return data;
};

export const editDrink = async (drinkId, newDrink) => {
  try {
    const { data } = await axios.patch(`/water/drinks/${drinkId}`, newDrink);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
