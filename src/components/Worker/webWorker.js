onmessage = (event) => {
  if (event.data === "start") {
    let count = 0;
    const TOTAL = 5000000000;
    const INCREMENT = TOTAL / 100;

    for (let i = 0; i < TOTAL; i++) {
      count += 1;

      if (i % INCREMENT === 0) {
        postMessage({ progress: (i / TOTAL) * 100 });
      }
    }
    postMessage({ progress: 100, result: count });
  }
};
