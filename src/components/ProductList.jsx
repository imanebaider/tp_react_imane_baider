import React from "react";
import { FaShoppingCart, FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";

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

const commentaires = [
  { id: 1, nom: "Sara", commentaire: "Très bonne qualité, la tasse est superbe !" },
  { id: 2, nom: "Youssef", commentaire: "Livraison rapide et tasse que j’adore." },
  { id: 3, nom: "Leila", commentaire: "Service excellent, je recommanderai sans hésiter." },
];

const Commentaires = () => (
  <div style={{ maxWidth: "800px", margin: "40px auto" }}>
    <h2>Avis des clients</h2>
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {commentaires.map(({ id, nom, commentaire }) => (
        <div
          key={id}
          style={{
            backgroundColor: "#ffc0cb",
            borderRadius: "8px",
            padding: "15px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            width: "250px",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0" }}>{nom}</h3>
          <p style={{ margin: 0 }}>{commentaire}</p>
        </div>
      ))}
    </div>
  </div>
);


function Header() {
  return (
    <header style={{ borderBottom: "1px solid #ddd", marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#f8f8f8",
          padding: "5px 30px",
          fontSize: "14px",
          color: "#555",
          alignItems: "center",
        }}
      >
        <div>Spend 600Dhs for free delivery</div>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <FaFacebookF color="#3b5998" /> 22k Followers
          <FaInstagram color="#e4405f" style={{ marginLeft: "15px" }} /> 120 Followers
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: "28px", color: "#8e44ad" }}>Ruya Store</h1>
          <p style={{ margin: 0, fontSize: "14px", color: "#999" }}>Drink Your Coffee With Cute Mugs</p>
        </div>

        <nav style={{ display: "flex", gap: "25px", fontWeight: "bold" }}>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            Discover Mugs
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            Ceramic Mugs
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            Handmade Mugs
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            Classic Mugs
          </a>
          <a href="#" style={{ textDecoration: "none", color: "#333" }}>
            More
          </a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <select
            style={{
              border: "1px solid #8e44ad",
              borderRadius: "5px",
              padding: "5px 12px",
              color: "#8e44ad",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            aria-label="Select language"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>

          <button
            style={{
              position: "relative",
              backgroundColor: "#f1c40f",
              border: "none",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            aria-label="Cart"
          >
            <FaShoppingCart />
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                backgroundColor: "red",
                color: "white",
                fontSize: "12px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function ListeProduits() {
  return (
    <div>
      <Header />

      <div style={{ position: "relative", height: "50vh", marginBottom: "30px" }}>
        <img
          src="/assets/images/image.PNG"
          alt="Bannière Ruya Store"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        />
      </div>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        Our Products
      </h2>

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
                aria-label={`Ajouter ${produit.name} au panier`}
              >
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Commentaires />

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f8f8f8",
        padding: "40px 30px",
        marginTop: "50px",
        fontSize: "14px",
        color: "#555",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h3>About Us</h3>
          <p>Welcome to Ruya Store, your best choice for elegant coffee mugs.</p>
          <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
            <FaFacebookF color="#3b5998" />
            <FaInstagram color="#e4405f" />
            <FaPinterestP color="#bd081c" />
            <FaTiktok color="#000" />
          </div>
        </div>

        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h3>Customer Service</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li><a href="#">Help & Contact Us</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Online Stores</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h3>Subscribe to Our Newsletter</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Merci pour votre inscription !");
            }}
          >
            <input
              type="email"
              placeholder="Votre email"
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
                marginBottom: "10px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 15px",
                backgroundColor: "#8e44ad",
                border: "none",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: "40px", color: "#aaa" }}>
        © 2025 Ruya Store. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return <ListeProduits />;
}
