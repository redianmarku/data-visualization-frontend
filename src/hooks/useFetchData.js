import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState({
    labels: [], // Labels for the x-axis
    values: [], // Corresponding values for the y-axis
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
   * fetchData
   *
   * Asynchronously fetches data from the API and updates the state with the labels and values.
   */
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const rawData = response.data[0]["2024"];
      const labels = [];
      const values = [];

      rawData.forEach((monthData) => {
        Object.values(monthData).forEach((datesArray) => {
          datesArray.forEach((dateObj) => {
            const [date, value] = Object.entries(dateObj)[0];
            labels.push(date.split(",")[0]);
            values.push(value);
          });
        });
      });

      setData({ labels, values });
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }, [url]);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};

export default useFetchData;
