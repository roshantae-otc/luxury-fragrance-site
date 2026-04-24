import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Fragrance Data
const fragrances = [
  {
    id: 1,
    name: "Nuit d'Argent",
    collection: "Nocturnal Tales",
    family: "Woody / Spicy",
    price: 195,
    description: "A metallic rose under a moonlit sky. Nuit d'Argent captures the ephemeral beauty of the city at 3 AM. It is cold yet intimate, sharp yet velvety.",
    notes: {
      top: ["Silver Sage", "Pink Pepper"],
      heart: ["Metallic Rose", "Iris Concrete"],
      base: ["Sandalwood", "White Musk"]
    },
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    name: "Rose de Matin",
    collection: "Morning Dew",
    family: "Floral",
    price: 180,
    description: "The crisp scent of a Parisian garden at dawn. Fresh, dew-covered petals and soft morning light.",
    notes: {
      top: ["Bergamot", "Lychee"],
      heart: ["Damask Rose", "Peony"],
      base: ["Cedarwood", "Amber"]
    },
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    name: "Cèdre Profond",
    collection: "The Library",
    family: "Woody",
    price: 210,
    description: "Old books and cedarwood shelves. A fragrance for the quiet scholar.",
    notes: {
      top: ["Incense", "Cardamom"],
      heart: ["Cedar", "Papyrus"],
      base: ["Vetiver", "Oakmoss"]
    },
    image: "https://images.unsplash.com/photo-1557170334-a7c3a4e2ef0b?auto=format&fit=crop&q=80&w=1200"
  }
];

// Routes
app.get('/api/fragrances', (req, res) => {
  res.json(fragrances);
});

app.get('/api/fragrances/:id', (req, res) => {
  const fragrance = fragrances.find(f => f.id === parseInt(req.params.id));
  if (!fragrance) return res.status(404).json({ message: 'Fragrance not found' });
  res.json(fragrance);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
