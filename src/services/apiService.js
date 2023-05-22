import axios from "axios";

export const get = async (endPoint, offset) => {
  const response = {};

  try {
    const { data } = await axios.get(
      offset > 0 ? `${endPoint}&offset=` + offset : endPoint
    );
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};

export const getDetails = async (endPoint) => {
  const response = {};

  try {
    const { data } = await axios.get(endPoint);
    response.data = data;
  } catch (error) {
    response.error = error;
  }

  return response;
};
