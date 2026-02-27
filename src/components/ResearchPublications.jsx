// /src/components/ResearchPublications.jsx
import React from "react";
import "./ResearchPublications.css";

const ResearchPublications = () => {
  const papers = [
    {
      title:
        "Robustness of Quantum Key Distribution Networks Under Topology-Dependent and Capacity-Aware Node Failures",
      date: "December 9, 2025",
      doi: "https://doi.org/10.5281/zenodo.17867640",
      type: "Preprint",
      summary:
        "Demonstrates that classical graph metrics fail to predict robustness in QKD networks. Introduces a physics-constrained BB84 capacity model and a capacity-weighted betweenness metric that accurately identifies catastrophic node failures across topology classes.",
      highlights: [
        "BB84-based capacity modeling and widest-path routing",
        "Capacity-weighted betweenness centrality (new metric)",
        "Robustness curves under random and targeted node failures",
        "Includes Python implementations for full reproducibility"
      ]
    },
    {
      title:
        "Probabilistic Regime-Aware Mixture-of-Experts for Convective Precipitation Forecasting in Thailand",
      date: "December 8, 2025",
      doi: "https://doi.org/10.5281/zenodo.17861005",
      type: "Preprint",
      summary:
        "Evaluates deterministic, probabilistic, and hybrid MoE architectures for short-range rainfall forecasting on ERA5 Thailand data. Shows structural skill improvements and calibrated uncertainty for convective transitions.",
      highlights: [
        "568k ERA5 sequences (2020) with 24h windows and 3h horizons",
        "Hybrid NLL+MSE MoE improves uncertainty quality",
        "Deterministic MoE best for convective onset detection",
        "Full training code and evaluation toolkit included"
      ]
    },
    {
      title:
        "Multi-Regime CFD Surrogate Modeling Using Mixture-of-Experts (MoE): A Unified Framework for Complex Aerodynamic Regimes",
      date: "December 6, 2025",
      doi: "https://doi.org/10.5281/zenodo.17843437",
      type: "Publication",
      summary:
        "Builds a synthetic multi-regime CFD generator and trains an MoE surrogate that outperforms classical regressors by ~100×. Experts specialize in attached/transitional/stall flow regimes, enabling interpretable aerodynamic decomposition.",
      highlights: [
        "Synthetic CFD generator across 6+ aerodynamic parameters",
        "MoE reduces error spikes near stall region",
        "Expert-disagreement used as uncertainty metric",
        "Designed for active-learning loops with RANS/LES solvers"
      ]
    }
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <h2 className="research-header">Research & Publications</h2>

        {papers.map((p, idx) => (
          <article key={idx} className="research-item">
            <h3>{p.title}</h3>
            <div className="research-meta">
              <span>{p.date}</span> · <span>{p.type}</span> ·{" "}
              <a href={p.doi} target="_blank" rel="noopener noreferrer">
                DOI Link
              </a>
            </div>

            <p className="research-summary">{p.summary}</p>

            <ul className="research-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResearchPublications;
