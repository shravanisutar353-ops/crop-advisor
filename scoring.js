// Typical growing ranges per crop: [low, high] for each factor.
const CROPS = {
  rice:      { N: [80, 120], P: [35, 60],  K: [35, 45], temperature: [20, 27], humidity: [80, 90], ph: [5.5, 7.0], rainfall: [180, 300] },
  maize:     { N: [70, 100], P: [40, 60],  K: [15, 25], temperature: [18, 27], humidity: [55, 70], ph: [5.8, 7.0], rainfall: [60, 110] },
  wheat:     { N: [50, 90],  P: [40, 60],  K: [15, 25], temperature: [12, 22], humidity: [50, 65], ph: [6.0, 7.5], rainfall: [50, 100] },
  cotton:    { N: [100, 140], P: [15, 30], K: [15, 25], temperature: [22, 32], humidity: [50, 70], ph: [6.0, 8.0], rainfall: [60, 120] },
  sugarcane: { N: [90, 130], P: [15, 30],  K: [40, 55], temperature: [25, 35], humidity: [70, 85], ph: [6.0, 7.5], rainfall: [150, 250] }
};
const FACTORS = ["N", "P", "K", "temperature", "humidity", "ph", "rainfall"];

// 1 inside the range, falling linearly to 0 at one range-width outside it.
function factorScore(value, [lo, hi]) {
  if (value >= lo && value <= hi) return 1;
  const width = hi - lo;
  const gap = value < lo ? lo - value : value - hi;
  return Math.max(0, 1 - gap / width);
}

function scoreCrops(inputs) {
  return Object.entries(CROPS)
    .map(([crop, ranges]) => {
      const total = FACTORS.reduce((sum, f) => sum + factorScore(inputs[f], ranges[f]), 0);
      return { crop, score: total / FACTORS.length };
    })
    .sort((a, b) => b.score - a.score);
}
