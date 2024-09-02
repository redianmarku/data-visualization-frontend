import React from "react";
import BarChart from "./BarChart";
import useFetchData from "../hooks/useFetchData";
import ErrorMessage from "./common/ErrorMessage";
import LoadingSpinner from "./common/LoadingSpinner";

const DataFetcher = () => {
  const { data, error, loading } = useFetchData(
    "https://django-dev.aakscience.com/candidate_test/fronted"
  );

  // Show loading spinner while data is fetching
  if (loading) return <LoadingSpinner />;

  // Show error box if eny error comes from data fetching
  if (error) return <ErrorMessage message={error} />;

  return <BarChart labels={data.labels} values={data.values} />;
};

export default React.memo(DataFetcher);
