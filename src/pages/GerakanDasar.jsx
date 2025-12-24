import React, { useState } from "react";

import dumbbellChestPress from "../assets/Dumbbell chest press.jpeg";
import dumbbellSquat from "../assets/Dumbbell squat.jpeg";
import latPulldown from "../assets/Lat pulldown.jpeg";
import dumbbellLunges from "../assets/Dumbbell lunges.jpeg";
import dumbbellShoulderPress from "../assets/Dumbbell shoulder press.jpeg";
import smithMachine from "../assets/Smith machine.jpeg";
import barbell from "../assets/Barbrl.jpeg";
import dumbbellRow from "../assets/Dumbbell arm row.jpeg";
import treadmill from "../assets/Treadmil.jpeg";

const gerakanData = [
    {
        id: 1,
        title: "Dumbbell Chest Press",
        image: dumbbellChestPress,
        description: "Latihan otot dada yang efektif menggunakan dumbbell. Berbaring di bangku datar, dorong beban ke atas hingga tangan lurus.",
        target: "Dada (Pectorals), Bahu Depan, Triceps",
        difficulty: "Pemula - Menengah",
    },
    {
        id: 2,
        title: "Dumbbell Squat",
        image: dumbbellSquat,
        description: "Melatih kaki dan bokong dengan memegang dumbbell di samping tubuh atau di depan dada (Goblet). Jaga punggung tetap lurus.",
        target: "Quadriceps, Glutes, Hamstring",
        difficulty: "Pemula",
    },
    {
        id: 3,
        title: "Lat Pulldown",
        image: latPulldown,
        description: "Gerakan menarik beban ke arah dada untuk melatih otot punggung agar lebih lebar dan kuat (V-Shape).",
        target: "Latissimus Dorsi (Sayap), Biceps",
        difficulty: "Pemula",
    },
    {
        id: 4,
        title: "Dumbbell Lunges",
        image: dumbbellLunges,
        description: "Melangkah ke depan satu per satu dengan beban di tangan. Sangat bagus untuk keseimbangan dan membentuk otot kaki.",
        target: "Quadriceps, Glutes, Hamstring",
        difficulty: "Menengah",
    },
    {
        id: 5,
        title: "Dumbbell Shoulder Press",
        image: dumbbellShoulderPress,
        description: "Mendorong dumbbell dari bahu ke atas kepala. Membangun bahu yang kokoh dan melatih kestabilan inti tubuh.",
        target: "Deltoids (Bahu), Triceps",
        difficulty: "Menengah",
    },
    {
        id: 6,
        title: "Smith Machine Squat",
        image: smithMachine,
        description: "Variasi squat yang lebih stabil menggunakan mesin. Cocok untuk fokus pada teknik dan keamanan saat mengangkat beban berat.",
        target: "Quadriceps, Glutes",
        difficulty: "Menengah",
    },
    {
        id: 7,
        title: "Barbell Deadlift",
        image: barbell,
        description: "Latihan compound angkat beban menggunakan barbell. Melatih kekuatan punggung bawah, kaki, dan genggaman.",
        target: "Punggung Bawah, Glutes, Hamstring",
        difficulty: "Lanjutan",
    },
    {
        id: 8,
        title: "Dumbbell Row",
        image: dumbbellRow,
        description: "Menarik dumbbell di samping tubuh dengan posisi membungkuk. Fokus isolasi otot punggung bagian samping.",
        target: "Latissimus Dorsi, Biceps, Rhomboids",
        difficulty: "Pemula - Menengah",
    },
    {
        id: 9,
        title: "Treadmill Cardio",
        image: treadmill,
        description: "Latihan kardiovaskular untuk membakar kalori dan meningkatkan stamina jantung. Bisa jalan santai atau lari.",
        target: "Jantung (Kardio), Kaki, Betis",
        difficulty: "Pemula",
    }
];

export default function GerakanDasar() {
    const [selectedGerakan, setSelectedGerakan] = useState(null);

    return (
        <section id="gerakan" className="gerakan-section">
            <div className="gerakan-container">

                <div className="gerakan-header">
                    <span className="gerakan-badge">Tutorial</span>
                    <h1>Gerakan <span>Dasar</span> Gym</h1>
                    <p>
                        Kuasai teknik dasar ini sebelum melangkah ke beban yang lebih berat.
                        Klik kartu untuk melihat detail ringkas.
                    </p>
                </div>

                <div className="gerakan-grid">
                    {gerakanData.map((item) => (
                        <div
                            key={item.id}
                            className={`gerakan-card ${selectedGerakan === item.id ? "active" : ""}`}
                            onClick={() => setSelectedGerakan(selectedGerakan === item.id ? null : item.id)}
                        >
                            <div className="gerakan-image-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                            <div className="gerakan-info">
                                <div className="gerakan-top">
                                    <span className={`difficulty-badge ${item.difficulty.includes("Pemula") ? "easy" : item.difficulty.includes("Menengah") ? "medium" : "hard"}`}>
                                        {item.difficulty}
                                    </span>
                                </div>
                                <h3>{item.title}</h3>
                                <p className="gerakan-target">Target: {item.target}</p>
                            </div>

                            <div className="gerakan-detail">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
