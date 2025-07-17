import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

 

useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${selectedBreed}`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error al obtener las imágenes de la raza:", error);
      }
    };

    if (selectedBreed) {
      fetchImages();
    }
  }, [selectedBreed]);

  return (
    <div>
      <h2>Razas de Perros</h2>
      {isLoading ? (
        <p>Cargando razas de perros...</p>
      ) : (
        <div>
          <select value={selectedBreed} onChange={handleBreedSelect}>
            <option value="">Selecciona una raza</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>

          {selectedBreed && (
            <div>
              <h3>Imágenes de la raza</h3>
              {images.map((image) => (
                <img key={image.id} src={image.url} alt="Perro" />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DataFetcher;