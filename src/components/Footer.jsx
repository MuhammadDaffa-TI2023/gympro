import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-overlay"></div>
            <div className="footer-container">

                {/* Kolom 1: Brand */}
                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <h2><span>Gym</span>Pro</h2>
                    </div>
                    <p className="brand-desc">
                        Partner terbaik perjalanan kebugaranmu. Kami menyediakan panduan, sejarah, dan nutrisi untuk hidup yang lebih sehat.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-link" aria-label="Instagram">
                            <i className="gg-instagram"></i> IG
                        </a>
                        <a href="#" className="social-link" aria-label="YouTube">
                            <i className="gg-youtube"></i> YT
                        </a>
                        <a href="#" className="social-link" aria-label="Twitter">
                            <i className="gg-twitter"></i> TW
                        </a>
                    </div>
                </div>

                {/* Kolom 2: Navigasi */}
                <div className="footer-col links-col">
                    <h3>Eksplorasi</h3>
                    <ul>
                        <li><a href="#sejarah">Sejarah & Evolusi</a></li>
                        <li><a href="#gerakan">Gerakan Dasar</a></li>
                        <li><a href="#suplemen">Panduan Suplemen</a></li>

                    </ul>
                </div>


            </div>

            <div className="footer-bottom">
                <p>&copy; {year} GymPro Indonesia</p>
            </div>
        </footer>
    );
}
