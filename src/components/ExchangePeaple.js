import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useQuery, gql } from "@apollo/client";
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
    setSelectedPerson(person);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <Header lengthValue={data.peaples.length} />
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
          modalTitle="Person Details"
        >
          <Card className="my-3 p-3 rounded">
            <Card.Body>
              <Card.Title as="div">
                <strong>Name:{selectedPerson.name}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>Height:{selectedPerson.height}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>Mass:{selectedPerson.mass}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>HairColor:{selectedPerson.hair_color}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>SkinColor:{selectedPerson.skin_color}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>EyeColor:{selectedPerson.eye_color}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>BirthColor:{selectedPerson.birth_year}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>Gender:{selectedPerson.gender}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>Homeworld:{selectedPerson.homeworld}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>Created:{selectedPerson.created}</strong>
              </Card.Title>
            </Card.Body>
            <Card.Body>
              <Card.Title as="div">
                <strong>Url:{selectedPerson.url}</strong>
              </Card.Title>
            </Card.Body>
          </Card>
        </Modal>
      )}
    </div>
  );
};
