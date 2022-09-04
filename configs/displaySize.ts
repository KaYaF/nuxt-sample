interface Viewport {
  width: number;
  height: number;
}

const viewports: Viewport[] = [
  {
    width: 2048,
    height: 1536,
  },
  {
    width: 1280,
    height: 720,
  },
  {
    width: 1024,
    height: 768,
  },
  {
    // iPad mini
    width: 768,
    height: 1024,
  },
  {
    // iPhone SR
    width: 375,
    height: 667,
  },
];

export {Viewport, viewports};
