import React from "react";
import cardioImg from "../assets/gym_cardio_area.png";
import weightImg from "../assets/gym_weight_area.png";
import lockerImg from "../assets/gym_locker_room.png";
import yogaImg from "../assets/gym_yoga_studio.png";
import pecDeckImg from "../assets/Alat Pec Deck Machine.jpeg";
import pulldownImg from "../assets/Alat Pulldown Machine.jpeg";
import bikeImg from "../assets/Alat Stationery Bicycling.jpeg";
import treadmillImg from "../assets/Alat Treadmill.jpeg";
import dumbbellImg from "../assets/Alat dumble.jpeg";
import legPressImg from "../assets/Alat leg press machine .jpeg";

const Fasilitas = () => {
  const facilities = [
    {
      id: 1,
      title: "Area Kardio Modern",
      description:
        "Dilengkapi dengan treadmill, elliptical, dan sepeda statis terbaru untuk menjaga stamina dan kesehatan jantung Anda. Area yang luas dan nyaman.",
      image: cardioImg,
    },
    {
      id: 2,
      title: "Area Beban Bebas",
      description:
        "Lengkap dengan dumbbell, barbell, dan bench press kualitas terbaik. Dirancang untuk pembentukan otot yang maksimal bagi pemula hingga profesional.",
      image: weightImg,
    },
    {
      id: 3,
      title: "Studio Yoga & Aerobik",
      description:
        "Ruang luas dengan pencahayaan alami dan cermin besar. Ideal untuk kelas yoga, pilates, zumba, dan aerobik yang menenangkan namum energik.",
      image: yogaImg,
    },
    {
      id: 4,
      title: "Ruang Locker Premium",
      description:
        "Fasilitas locker yang aman, bersih, dan mewah. Dilengkapi dengan shower air hangat dan ruang ganti yang privat untuk kenyamanan setelah latihan.",
      image: lockerImg,
    },
    {
      id: 5,
      title: "Pec Deck Machine",
      description:
        "Melatih otot dada (pectoralis) dan bahu dengan isolasi gerakan yang maksimal dan aman bagi pemula.",
      image: pecDeckImg,
    },
    {
      id: 6,
      title: "Lat Pulldown Machine",
      description:
        "Alat esensial untuk membentuk otot punggung berbentuk V dan memperkuat otot bicep Anda.",
      image: pulldownImg,
    },
    {
      id: 7,
      title: "Stationary Bike Premium",
      description:
        "Kayuhan halus untuk latihan kardiovaskular yang efektif sekaligus mengencangkan otot kaki dan paha.",
      image: bikeImg,
    },
    {
      id: 8,
      title: "Treadmill Profesional",
      description:
        "Berlari atau berjalan dengan nyaman di atas treadmill modern dengan fitur pemantauan detak jantung.",
      image: treadmillImg,
    },
    {
      id: 9,
      title: "Dumbbell Set Lengkap",
      description:
        "Pilihan beban yang variatif untuk memaksimalkan latihan beban bebas dan pembentukan otot yang proporsional.",
      image: dumbbellImg,
    },
    {
      id: 10,
      title: "Leg Press Machine",
      description:
        "Bangun kekuatan kaki yang eksplosif dengan aman, menargetkan quadriceps, hamstrings, dan glutes.",
      image: legPressImg,
    },
  ];

  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="fasilitas" className="fasilitas-section">
      <div className="container">
        <h2 className="section-title">Fasilitas Premium Kami</h2>
        <p className="section-subtitle">
          Nikmati pengalaman latihan terbaik dengan peralatan canggih dan fasilitas
          pendukung yang lengkap.
        </p>
        <div className="fasilitas-grid">
          {facilities.map((item) => (
            <div key={item.id} className="fasilitas-card">
              <div
                className="fasilitas-image-wrapper"
                onClick={() => openModal(item.image)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.image} alt={item.title} className="fasilitas-image" />
                <div className="overlay-fl">
                  <span>🔍 View</span>
                </div>
              </div>
              <div className="fasilitas-content">
                <h3 className="fasilitas-title">{item.title}</h3>
                <p className="fasilitas-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <img src={selectedImage} alt="Fasilitas Detail" className="modal-image" />
          </div>
        </div>
      )}

      <style jsx>{`
        .fasilitas-section {
          padding: 80px 20px;
          background-color: #111;
          color: white;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
          background: linear-gradient(to right, #ef4444, #f87171);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
        }
        .section-subtitle {
          color: #9ca3af;
          margin-bottom: 50px;
          font-size: 1.1rem;
        }
        .fasilitas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        .fasilitas-card {
          background: #1f2937;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #374151;
        }
        .fasilitas-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: #ef4444;
        }
        .fasilitas-image-wrapper {
          height: 200px;
          overflow: hidden;
          position: relative;
        }
        .fasilitas-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .fasilitas-card:hover .fasilitas-image {
          transform: scale(1.1);
        }
        .overlay-fl {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .fasilitas-image-wrapper:hover .overlay-fl {
            opacity: 1;
        }
        .overlay-fl span {
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
            background: rgba(0,0,0,0.6);
            padding: 8px 16px;
            border-radius: 20px;
        }

        /* Modal Styles */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        }
        .modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .modal-image {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 8px;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            border: 2px solid #333;
        }
        .close-button {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 3rem;
            cursor: pointer;
            line-height: 1;
            transition: color 0.3s;
        }
        .close-button:hover {
            color: #ef4444;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .fasilitas-content {
          padding: 20px;
          text-align: left;
        }
        .fasilitas-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: white;
        }
        .fasilitas-desc {
          color: #9ca3af;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          .fasilitas-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Fasilitas;
