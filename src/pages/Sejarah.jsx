import React from "react";

const historyData = [
  {
    era: "Yunani Kuno (Abad 5 SM)",
    title: "Asal Mula 'Gymnasion'",
    description:
      "Akar dari gym bermula di Yunani Kuno. 'Gymnasion' adalah tempat untuk pendidikan fisik dan intelektual. Para atlet berlatih tanpa pakaian (gymnos) untuk merayakan estetika tubuh manusia.",
  },
  {
    era: "Abad ke-19",
    title: "Kebangkitan Kebugaran Fisik",
    description:
      "Setelah lama meredup, minat pada aktivitas fisik bangkit kembali di Eropa dan Amerika. Friedrich Jahn di Jerman membuka taman olahraga luar ruangan pertama, mempopulerkan senam (gymnastics).",
  },
  {
    era: "Awal Abad ke-20",
    title: "Era Muscle Beach & Bodybuilding",
    description:
      "Pantai Santa Monica menjadi ikon budaya fisik. Munculnya kompetisi binaraga dan tokoh seperti Eugen Sandow mulai memperkenalkan latihan beban sebagai gaya hidup.",
  },
  {
    era: "Era Modern",
    title: "Gym Sebagai Gaya Hidup",
    description:
      "Kini, gym bukan hanya tentang otot, tapi kesehatan holistik. Dengan teknologi canggih, kelas variatif seperti Yoga dan Pilates, gym menjadi tempat bersosialisasi dan menjaga kesehatan mental.",
  },
];

export default function Sejarah() {
  return (
    <section id="sejarah" className="sejarah">
      <div className="sejarah-container">

        {/* Header */}
        <div className="sejarah-header">
          <span className="sejarah-badge">Sejarah & Evolusi</span>
          <h1>
            Evolusi <span>Kebugaran</span> dari Masa ke Masa
          </h1>
          <p className="sejarah-intro">
            Setiap era memiliki cerita. Inilah perjalanan panjang bagaimana manusia membentuk tubuh dan karakter melalui latihan fisik.
          </p>
        </div>

        {/* Card Grid */}
        <div className="history-grid">
          {historyData.map((item, index) => (
            <div key={index} className="history-card">
              <span className="history-era-badge">{item.era}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
