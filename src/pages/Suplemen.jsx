import React from "react";
import wheyProteinImg from "../assets/whey-protein.webp";
import creatineImg from "../assets/creatine-monohydrate.png";
import bcaaImg from "../assets/bcaa.png";
import preWorkoutImg from "../assets/pre-workout.png";
import multivitaminImg from "../assets/multivitamin.png";
import fishOilImg from "../assets/fish-oil.png";

const suplemenData = [
    {
        id: 1,
        name: "Whey Protein",
        benefit: "Meningkatkan asupan protein harian untuk pemulihan dan pertumbuhan otot.",
        timing: "Setelah latihan (Post-workout)",
        category: "Muscle Building",
        image: wheyProteinImg,
    },
    {
        id: 2,
        name: "Creatine Monohydrate",
        benefit: "Meningkatkan kekuatan, performa, dan volume otot.",
        timing: "Kapan saja (konsisten setiap hari)",
        category: "Performance",
        image: creatineImg,
    },
    {
        id: 3,
        name: "BCAA",
        benefit: "Mencegah penyusutan otot (katabolik) dan mengurangi kelelahan.",
        timing: "Saat latihan (Intra-workout)",
        category: "Recovery",
        image: bcaaImg,
    },
    {
        id: 4,
        name: "Pre-Workout",
        benefit: "Memberikan energi ekstra dan fokus selama sesi latihan.",
        timing: "30 menit sebelum latihan",
        category: "Energy",
        image: preWorkoutImg,
    },
    {
        id: 5,
        name: "Multivitamin",
        benefit: "Menjaga kesehatan umum dan fungsi tubuh optimal.",
        timing: "Pagi hari setelah sarapan",
        category: "Health",
        image: multivitaminImg,
    },
    {
        id: 6,
        name: "Fish Oil (Omega-3)",
        benefit: "Mendukung kesehatan jantung dan sendi.",
        timing: "Bersama makanan utama",
        category: "Health",
        image: fishOilImg,
    },
];

export default function Suplemen() {
    return (
        <section id="suplemen" className="suplemen-section">
            <div className="suplemen-container">

                <div className="suplemen-header">
                    <span className="suplemen-badge">Nutrisi Tambahan</span>
                    <h1>Suplemen <span>Fitness</span></h1>
                    <p>
                        Suplemen dapat membantu performa, namun ingat:
                        <strong> Makanan asli (Real Food) tetap yang utama.</strong>
                    </p>
                </div>

                <div className="suplemen-grid">
                    {suplemenData.map((item) => (
                        <div key={item.id} className="suplemen-card">
                            <div className="suplemen-image-container">
                                <img src={item.image} alt={item.name} className="suplemen-image" />
                            </div>
                            <div className="suplemen-content">
                                <span className="suplemen-category">{item.category}</span>
                                <h3>{item.name}</h3>
                                <p className="suplemen-benefit">{item.benefit}</p>
                                <div className="suplemen-timing">
                                    <span className="icon">🕒</span> {item.timing}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
