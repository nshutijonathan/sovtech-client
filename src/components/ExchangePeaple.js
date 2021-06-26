import React from "react";
import { useState } from "react";

import ReactDOM from "react-dom";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import Spinner from "./Spinner";
import Paginate from "./Pagination";
import Header from "./Header";
import Footer from "./Footer.js";
import Modal from "./Modal";
const EXCHANGE_PEAPLE = gql`
  query {
    peaples {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld
      films
      species
      vehicles
      starships
      created
      edited
      url
    }
  }
`;
export const ExchangePeaple = () => {
  const { loading, error, data } = useQuery(EXCHANGE_PEAPLE);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  if (loading) return <Spinner />;
  if (error) return <p>Error :(</p>;

  const handleDisplaySelected = (person) => {
    console.log("person clicked", person);
    setSelectedPerson(person);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <Header />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
            <th scope="col">hair_color</th>
            <th scope="col">skin_color</th>
            <th scope="col">eye_color</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>

        <tbody>
          {data.peaples.map((value) => (
            <tr key={value.name}>
              <th>{value.name}</th>
              <td>{value.height}</td>
              <td>{value.mass}</td>
              <td>{value.hair_color}</td>
              <td>{value.skin_color}</td>
              <td>{value.eye_color}</td>
              <td>{value.gender}</td>

              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => handleDisplaySelected(value)}
                >
                  view
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginate data={data} />
      <Footer />
      {showModal && selectedPerson && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          modalTitle="Person Detail"
        >
          <h2>Name:{selectedPerson.name}</h2>
        </Modal>
      )}
    </div>
  );
};
