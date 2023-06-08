import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { stat } from "../../pokemonInterface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      max: 256,
      min: 0,
    },
  },
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  Animation: {
    duration: 1000,
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Stats",
    },
  },
};

const labels = ["HP", "Attack", "Defense", "Speed", "Sp Attack", "Sp Defense"];

export function PokemonChart(Props: stat) {
  const hp = Props.hp;
  const attack = Props.attack;
  const defense = Props.defense;
  const speed = Props.speed;
  const spAttack = Props.specialAttack;
  const spDefense = Props.specialDefense;

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [hp, attack, defense, speed, spAttack, spDefense],
        borderColor: "2F0743",
        backgroundColor: "#41295a",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
