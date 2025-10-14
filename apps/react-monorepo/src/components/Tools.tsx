import React from "react";
import { SiReactquery, SiReacttable, SiRedux } from "react-icons/si";
import "./Tools.css";
import { ImTable } from "react-icons/im";

const tools = [
    { name: "AG Grid", icon: <ImTable size={40} /> },
    { name: "React Query", icon: <SiReactquery size={40} /> },
    { name: "React Table", icon: <SiReacttable size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
];

const Tools: React.FC = () => (
    <section id="tools" className="section">
        <h2 className="title">Tools</h2>
        <div className="tool-grid">
            {tools.map((t, i) => (
                <div key={i} className="tool-card">
                    {t.icon}
                    <p>{t.name}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Tools;
