export const exerciseOptions: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchExercise = async (
  url: string,
  options: RequestInit
): Promise<any> => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
