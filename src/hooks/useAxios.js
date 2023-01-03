import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { linkMain } from "../apiConfig/config";

function useAxios(linkSup) {
  const [dataAxios, setDataAxios] = useState();
  useEffect(() => {
    axios
      .get(`${linkMain}${linkSup}`)
      .then(function (response) {
        // handle success
        setDataAxios(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [linkSup]);
  return dataAxios;
}

export default useAxios;
