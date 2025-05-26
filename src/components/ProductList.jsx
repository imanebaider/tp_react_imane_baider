
import React, { useState } from "react";
import { FaShoppingCart, FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";
const produits = [
  { id: 1, name: "Rüya Classique", price: "40 DH", image: "/assets/images/image1.jpg" },
  { id: 2, name: "Rüya Élégance", price: "60 DH", image: "/assets/images/image2.jpg" },
  { id: 3, name: "Rüya Rosée Matinale", price: "55 DH", image: "/assets/images/image3.jpg" },
  { id: 4, name: "Rüya Message d’Âme", price: "65 DH", image: "/assets/images/image4.jpg" },
  { id: 5, name: "Rüya Or de Lune", price: "80 DH", image: "/assets/images/image5.jpg" },
  { id: 6, name: "Rüya Coeur Lunaire", price: "70 DH", image: "/assets/images/image6.jpg" },
  { id: 7, name: "Rüya Bohème de Nuit", price: "50 DH", image: "/assets/images/image7.jpg" },
  { id: 8, name: "Rüya Étoile d'Or", price: "75 DH", image: "/assets/images/image8.jpg" },
  { id: 9, name: "Rüya Lune Douce", price: "85 DH", image: "/assets/images/image9.jpg" },
  { id: 10, name: "Rüya Sable Rose", price: "60 DH", image: "/assets/images/image10.jpg" },
  { id: 11, name: "Rüya Nuit Dorée", price: "72 DH", image: "/assets/images/image11.jpg" },
  { id: 12, name: "Rüya Velvet Dream", price: "68 DH", image: "/assets/images/image12.jpg" },
  { id: 13, name: "Rüya Lueur Pastel", price: "58 DH", image: "/assets/images/image13.jpg" },
  { id: 14, name: "Rüya Perle de Lune", price: "77 DH", image: "/assets/images/image14.jpg" },
  { id: 15, name: "Rüya Brise d’Aurore", price: "73 DH", image: "/assets/images/image15.jpg" },
];

const commentaires = [
  { id: 1, nom: "Sara", commentaire: "Très bonne qualité, la tasse est superbe !" },
  { id: 2, nom: "Youssef", commentaire: "Livraison rapide et tasse que j’adore." },
  { id: 3, nom: "Leila", commentaire: "Service excellent, je recommanderai sans hésiter." },
  { id: 4, nom: "Amine", commentaire: "Produit conforme à la description, satisfait." },
  { id: 5, nom: "Nora", commentaire: "Très joli design, parfait pour un cadeau." },
  { id: 6, nom: "Karim", commentaire: "Emballage soigné et livraison dans les temps." },
  { id: 7, nom: "Sana", commentaire: "La tasse garde bien la chaleur, j’adore !" },
  { id: 8, nom: "Omar", commentaire: "Bon rapport qualité-prix, je recommande." },
  { id: 9, nom: "Meriem", commentaire: "Le service client est très réactif et sympa." },
  { id: 10, nom: "Rachid", commentaire: "Expérience d’achat facile et rapide." },
  { id: 11, nom: "Fatima", commentaire: "Tasse très résistante, je l’utilise tous les jours." },
];

const Commentaires = () => {
  const containerRef = React.useRef(null);

  const scrollToNext = (index) => {
    if (containerRef.current) {
      const cardWidth = 320;
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="comment-section">
      <style>
        {`
          .comment-section {
            max-width: 1200px;
            margin: 80px auto;
            padding: 0 20px;
          }

          .comment-section h2 {
            color:rgb(0, 0, 0);
            font-size: 2rem;
            text-align: center;
            margin-bottom: 40px;
            position: relative;
          }

          .comment-section h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: #ff80ab;
          }

          .comments-container {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 30px 0;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}

.comments-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

          .comment-card {
            background: linear-gradient(145deg, #fff0f6, #ffe5ec);
            border-radius: 20px;
            padding: 25px;
            width: 300px;
            flex-shrink: 0;
            transition: all 0.3s ease;
            border: 1px solid #ffd3e0;
            box-shadow: 0 4px 15px rgba(232, 30, 99, 0.1);
          }

          .comment-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 25px rgba(232, 30, 99, 0.15);
          }

          .comment-card h3 {
            color: #e91e63;
            margin: 0 0 15px 0;
            font-size: 1.3rem;
          }

          .comment-card p {
            color: #880e4f;
            margin: 0;
            line-height: 1.6;
          }
        `}
      </style>
      <h2>Avis des clients</h2>
      <div className="comments-container" ref={containerRef}>
        {commentaires.map(({ id, nom, commentaire }, index) => (
          <div
            key={id}
            className="comment-card"
            onClick={() => scrollToNext(index + 1)}
          >
            <h3>{nom}</h3>
            <p>{commentaire}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


function Header() {
  return (
    <header className="header">
      <style>
        {`
          .header {
            border-bottom: 2px solid #ffe5ec;
            background: linear-gradient(to right, #fff0f6, #ffffff);
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .top-header {
            background: linear-gradient(to right, #ffe5ec, #fff0f6);
            padding: 12px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #e91e63;
            font-size: 0.9rem;
          }

          .social-container {
            display: flex;
            align-items: center;
            gap: 25px;
          }

          .main-header {
            padding: 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255, 240, 246, 0.3);
          }

          .logo-container h1 {
            color: #e91e63;
            font-size: 2.5rem;
            margin: 0;
            text-shadow: 2px 2px 4px rgba(233, 30, 99, 0.1);
          }

          .logo-container p {
            color: #ff80ab;
            margin: 0;
            font-size: 0.9rem;
          }

          nav {
            display: flex;
            gap: 35px;
          }

          nav a {
            color: #e91e63;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }

          nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #ff80ab;
            transition: width 0.3s ease;
          }

          nav a:hover::after {
            width: 100%;
          }

          .header-controls {
            display: flex;
            align-items: center;
            gap: 25px;
          }

          .language-select {
            border: 2px solid #ff80ab;
            border-radius: 8px;
            padding: 8px 15px;
            color: #e91e63;
            background: transparent;
            font-weight: 500;
          }

          .cart-button {
            background: linear-gradient(135deg, #e91e63 0%, #ff80ab 100%);
            border: none;
            border-radius: 50%;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            position: relative;
            transition: transform 0.3s ease;
          }

          .cart-button:hover {
            transform: scale(1.1) rotate(-10deg);
          }

          .cart-count {
            background: #ffffff;
            color: #e91e63;
            border: 2px solid #ff80ab;
          }
        `}
      </style>
      <div className="top-header">
        <div>Livraison gratuite à partir de 600Dhs</div>
        <div className="social-container">
          <FaFacebookF /> 22k Followers
          <FaInstagram style={{ marginLeft: "15px" }} /> 120 Followers
        </div>
      </div>

      <div className="main-header">
        <div className="logo-container">
          <h1>Ruya Store</h1>
          <p>Drink Your Coffee With Cute Mugs</p>
        </div>

        <nav>
          <a href="#">Discover Mugs</a>
          <a href="#">Ceramic Mugs</a>
          <a href="#">Handmade Mugs</a>
          <a href="#">Classic Mugs</a>
          <a href="#">More</a>
        </nav>

        <div className="header-controls">
          <select className="language-select" aria-label="Select language">
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>

          <button className="cart-button" aria-label="Cart">
            <FaShoppingCart />
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
    );
}
function ListeProduits() {
  const [modalOuvert, setModalOuvert] = useState(false);
  const [produitSelectionne, setProduitSelectionne] = useState(null);

  const ouvrirModal = (produit) => {
    setProduitSelectionne(produit);
    setModalOuvert(true);
  };

  const fermerModal = () => {
    setModalOuvert(false);
    setProduitSelectionne(null);
  };

  return (
    <div>
      <Header />

      {/* Bannière */}
      <div
        style={{
          position: "relative",
          height: "70vh",
          background: "#fff",
          overflow: "hidden",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <img
          src="/assets/images/image.PNG"
          alt="Bannière Ruya Store"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Section des produits */}
      <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
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
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
                {produit.name}
              </h3>
              <p style={{ color: "#888", marginBottom: "10px" }}>
                {produit.price}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <button
                  onClick={() => ouvrirModal(produit)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#d81b60",
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
      </div>

      {/* Modal détails produit */}
      {modalOuvert && produitSelectionne && (
        <div
          onClick={fermerModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // باش مايسدش ملي نضغط فالداخل
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "500px",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            <button
              onClick={fermerModal}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
              aria-label="Fermer la fenêtre de détails"
            >
              ×
            </button>

            <img
              src={produitSelectionne.image}
              alt={produitSelectionne.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h2>{produitSelectionne.name}</h2>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {produitSelectionne.price}
            </p>
            <p>{produitSelectionne.description}</p>
          </div>
        </div>
      )}

      <Commentaires />
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <style>
        {`
          .footer {
            background-color: #fdf8f5;
            padding: 60px 20px;
            color: #3e2723;
            font-family: 'Segoe UI', sans-serif;
            border-top: 3px solid #f8c8dc;
          }

          .footer-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            max-width: 1200px;
            margin: auto;
          }

          .footer-section h3 {
            font-size: 1.2rem;
            color: #b71c1c;
            margin-bottom: 20px;
            position: relative;
          }

          .footer-section h3::after {
            content: "";
            display: block;
            width: 40px;
            height: 3px;
            background-color: #f48fb1;
            margin-top: 5px;
          }

          .footer-section p,
          .footer-section a {
            color: #5d4037;
            font-size: 0.95rem;
            line-height: 1.6;
            text-decoration: none;
          }

          .footer-section a:hover {
            color: #d81b60;
            text-decoration: underline;
          }

          .social-icons {
            display: flex;
            gap: 15px;
            margin-top: 15px;
          }

          .social-icons svg {
            color: #b71c1c;
            transition: 0.3s;
            cursor: pointer;
          }

          .social-icons svg:hover {
            color: #ec407a;
            transform: scale(1.2);
          }

          .newsletter-form input,
          .newsletter-form button {
            width: 100%;
            padding: 12px;
            margin-bottom: 10px;
            border-radius: 6px;
            font-size: 0.95rem;
          }

          .newsletter-form input {
            border: 1px solid #f48fb1;
            background-color: #fff;
          }

          .newsletter-form button {
            background-color: #d81b60;
            color: white;
            border: none;
            transition: 0.3s;
          }

          .newsletter-form button:hover {
            background-color: #ad1457;
          }

          .footer-bottom {
            text-align: center;
            margin-top: 40px;
            font-size: 0.85rem;
            color: #8d6e63;
          }
        `}
      </style>

      <div className="footer-container">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>Ruya Store vous propose des tasses élégantes pour rendre chaque moment café magique.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaTiktok />
          </div>
        </div>

        <div className="footer-section">
          <h3>Aide</h3>
          <p><a href="#">Livraison</a></p>
          <p><a href="#">Retour & Remboursement</a></p>
          <p><a href="#">Conditions Générales</a></p>
          <p><a href="#">FAQ</a></p>
        </div>

        <div className="footer-section">
          <h3>Contact & Paiement</h3>
          <p><a href="#">Nous contacter</a></p>
          <p><a href="#">Méthodes de paiement</a></p>
          <p><a href="#">Whatsapp Groupe</a></p>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" />
            <input type="tel" placeholder="Votre téléphone" />
            <button type="submit">S’abonner</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Ruya Store. Tous droits réservés.
      </div>
    </footer>
  );
}




export default function App() {
  return <ListeProduits />;
}
