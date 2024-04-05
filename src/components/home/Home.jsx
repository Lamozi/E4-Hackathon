import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Line 1',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgba(255, 99, 132, 0.6)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Line 2',
        data: [5, 12, 9, 15, 8, 12],
        borderColor: 'rgba(54, 162, 235, 0.6)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Line 3',
        data: [3, 7, 10, 8, 15, 6],
        borderColor: 'rgba(255, 206, 86, 0.6)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
      },
      {
        label: 'Line 4',
        data: [8, 3, 6, 2, 10, 4],
        borderColor: 'rgba(75, 192, 192, 0.6)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Line 5',
        data: [2, 5, 9, 11, 6, 7],
        borderColor: 'rgba(153, 102, 255, 0.6)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'bottom',
    },
    elements: {
      line: {
        tension: 0, // Disable bezier curves
      },
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  return (
    <div style={{ position: 'relative', width: '80vw', height: '60vh' }}>
      <Line data={data} options={options} />
    </div>
  );
};
function Home() {
  return (
    <div className="home-div">
      <div className="barre">
        <h1>DashBoard</h1>
        <div className="intensite">
          <ul>
            <li>
              <h3>Majeur</h3>
              <div className="intensite-val rouge">
                <h4>80%</h4>
              </div>
            </li>
            <li>
              <h3>Moyen</h3>
              <div className="intensite-val orange">
                <h4>40%</h4>
              </div>
            </li>
            <li>
              <h3>Mineur</h3>
              <div className="intensite-val vert">
                <h4>10%</h4>
              </div>
            </li>
          </ul>
      </div>
      </div>
      <div className="main-bas">
      <div className="incident">
        <h2>Incidents recents</h2>
        <ul>
          <li>
            <p>Erreur d'aiguillage AG</p>
            <h4>DONGES</h4>
          </li>
          <li>
          <p>Equipement et confort TE</p>
            <h4>ANGERS</h4>
          </li>
          <li>
          <p>Supression TS</p>
            <h4>RENNES</h4>
          </li>
          <li>
          <p>Erreur d'aiguillage AG</p>
            <h4>ST-NAZAIRE</h4>
          </li>
          <li>
          <p>Equipement et confort TE</p>
            <h4>ANGERS</h4>
          </li>
          <li>
          <p>Erreur d'aiguillage AG</p>
            <h4>RENNES</h4>
          </li>
          <li>
          <p>Supression TS</p>
            <h4>DOUGES</h4>
          </li>
          <li>
          <p>Erreur d'aiguillage AG</p>
            <h4>RENNES</h4>
          </li>
        </ul>
      </div>
      <div className="bac">
        <div className="total">
          <div className="gauche">
          <h2>400</h2>
          <ul>
            <li>Avis clients</li>
            <li>Reclammations</li>
            <li>Commentaires</li>
          </ul>
          </div>
          <div className="degre-droite">
            <div className="carre rouge"></div>
            <div className="carre orange"></div>
            <div className="carre vert"></div>
          </div>
        </div>
        <div className="milieu"></div>
      </div>
      <div className="box-donnee border-rouge">
        <h2 className="train">Trains</h2>
        <div className="bas">
          <ul>
            <li>
              <h2>350</h2>
              <p>Avis</p>
            </li>
            <li>
              <h2>80%</h2>
              <p>Intensité</p>
            </li>
            <li>
              <h2>Niveau 3</h2>
              <p>Priorité</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-donnee border-vert">
        <h2 className="train">Gares</h2>
        <div className="bas">
          <ul>
            <li>
              <h2>50</h2>
              <p>Avis</p>
            </li>
            <li>
              <h2>10%</h2>
              <p>Intensité</p>
            </li>
            <li>
              <h2>Niveau 1</h2>
              <p>Priorité</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-donnee border-orange">
        <h2 className="train">Villes</h2>
        <div className="bas">
          <ul>
            <li>
              <h2>50</h2>
              <p>Avis</p>
            </li>
            <li>
              <h2>10%</h2>
              <p>Intensité</p>
            </li>
            <li>
              <h2>Niveau 1</h2>
              <p>Priorité</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="box-donnee border-rouge">
        <h2 className="train">Autres</h2>
        <div className="bas">
          <ul>
            <li>
              <h2>350</h2>
              <p>Avis</p>
            </li>
            <li>
              <h2>80%</h2>
              <p>Intensité</p>
            </li>
            <li>
              <h2>Niveau 3</h2>
              <p>Priorité</p>
            </li>
          </ul>
        </div>
      </div>
     
      </div>
    
      <div className="main-carte">
      </div>
      <div className="prediction">
        <h1>Prediction</h1>
        <div className="chart">
        </div>
      </div>
    </div>
  );
}

export default Home