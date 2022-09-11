interface Viewport {
  width: number;
  height: number;
}

const viewports: Viewport[] = [
  {
    width: 2048,
    height: 2000,
  },
  {
    width: 1280,
    height: 2000,
  },
  {
    width: 1024,
    height: 2000,
  },
  {
    // iPad mini
    width: 768,
    height: 2000,
  },
  {
    // iPhone SR
    width: 375,
    height: 2000,
  },
];

export {Viewport, viewports};
