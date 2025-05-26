// src/components/ListeProduits.jsx
import React from "react";

const produits = [
  { id: 1, name: "Tasse Classique", price: "40 DH", image: "/assets/images/image1.jpg" },
  { id: 2, name: "Tasse Élégante", price: "60 DH", image: "/assets/images/image2.jpg" },
  { id: 3, name: "Tasse Rose Matin", price: "55 DH", image: "/assets/images/image3.jpg" },
  { id: 4, name: "Tasse à Message", price: "65 DH", image: "/assets/images/image4.jpg" },
  { id: 5, name: "Tasse Dorée", price: "80 DH", image: "/assets/images/image5.jpg" },
  { id: 6, name: "Tasse Coeur", price: "70 DH", image: "/assets/images/image6.jpg" },
  { id: 7, name: "Tasse Bohème", price: "50 DH", image: "/assets/images/image7.jpg" },
  { id: 8, name: "Tasse Rüya", price: "75 DH", image: "/assets/images/image8.jpg" },
];

function ListeProduits() {
  return (
    <div>
      {/* Banner section */}
      <div style={{ position: "relative", height: "50vh", marginBottom: "30px" }}>
        <img
          src="/assets/images/image.PNG"
          alt="Bannière"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        />
      </div>

      {/* Title under banner */}
      <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "28px", fontWeight: "bold" }}>
        Our Products
      </h2>

      {/* Liste des produits */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {produits.map((produit) => (
          <div
            key={produit.id}
            style={{
              backgroundColor: "#fff",
              padding: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              width: "220px",
              textAlign: "center",
            }}
          >
            <img
              src={produit.image}
              alt={produit.name}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3>{produit.name}</h3>
            <p>{produit.price}</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#8e44ad",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Détails
              </button>
              <button
                style={{
                  backgroundColor: "#f1c40f",
                  border: "none",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListeProduits;
