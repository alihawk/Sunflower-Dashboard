# Sunflower Crop Dashboard & Detection

Web dashboard for a smart-farming final-year project: estimating the **head count of sunflower crops** from drone imagery to forecast yield for cooking-oil production. The repo has two parts:

- **Dashboard** (Next.js app at the repo root): pick a crop, year, city, field and section, then explore drone mosaics, NDVI / SAVI / MSAVI vegetation-index maps, detected sunflower heads, and yield / field-condition widgets and charts.
- **Detection** (`detection/`): the Colab notebook used to train a **YOLOv7** sunflower-head detector on a custom Roboflow dataset.

## Tech stack

Next.js 13 (Pages Router) · React 18 · MUI · Tailwind CSS · React Leaflet · Recharts · React Spring · YOLOv7

## Project structure

```
.
├── src/
│   ├── pages/          # Routes: selectCrop → select-year → select-city → select-location
│   │   │               #         → selectSection → main / analysis / visualization / charts
│   │   └── api/        # Mock data endpoints for the charts
│   ├── components/     # Widgets, popups, map, charts, layout
│   ├── assets/images/  # Images imported by components
│   ├── utils/          # Mock-data generators used by the API routes
│   └── styles/
├── public/
│   ├── mosaics/        # Drone mosaics and NDVI/SAVI/MSAVI maps + legends
│   └── labels/         # Detection output (labelled sunflower heads)
└── detection/
    └── Sunflower_detection_YOLOv7_on_Custom_Data.ipynb
```

## Running locally

Requires Node.js 18+ and Yarn 1 (the project is locked with `yarn.lock`).

```bash
yarn install
yarn dev        # http://localhost:3000
```

Production build: `yarn build && yarn start`.

## Detection notebook

`detection/Sunflower_detection_YOLOv7_on_Custom_Data.ipynb` follows the [YOLOv7](https://github.com/WongKinYiu/yolov7) custom-dataset workflow: annotated drone tiles are exported from Roboflow in YOLOv7 format, and the model is fine-tuned on Colab. Labelled detection images shown in the dashboard live in `public/labels/`.

## License

[MIT](LICENSE)
