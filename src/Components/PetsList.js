import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";

function PetsList() {
  //const petList = pets.map((pet) => <PetItem pet={pet} key={pet.id} />);
  const [query, setQuery] = useState();
  const [type, setType] = useState();

  const searchAPet = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const searchASpecies = (event) => {
    setType(event.target.value);
  };

  const displayedPetList = pets
    .filter((pet) => {
      if (query === "" || query === undefined) {
        if (type === "" || type === undefined) {
          return pet;
        } else if (pet.type.includes(type)) {
          return pet;
        }
      } else if (pet.name.toLowerCase().includes(query)) {
        if (type === "" || type === undefined) {
          return pet;
        } else if (pet.type.includes(type)) {
          return pet;
        }
      }
    })
    .map((pet) => <PetItem pet={pet} key={pet.id} />);

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  onChange={searchAPet}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={searchASpecies}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{displayedPetList}</div>
      </div>
    </section>
  );
}

export default PetsList;
