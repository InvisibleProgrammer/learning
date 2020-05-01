require("./scripts.js");

function dominantDirection(text) {
  const characterCountsPerTextDirection = text
    .split("")
    .map((c) => {
      const charCode = c.charCodeAt(0);

      const script = SCRIPTS.filter((script) =>
        script.ranges.some(
          (range) => range[0] <= charCode && range[1] >= charCode
        )
      )[0];

      if (script) {
        return script.direction;
      }

      return "undefined";
    })
    .filter((direction) => direction !== "undefined")
    .reduce((counts, direction) => {
      if (counts[direction]) {
        counts[direction]++;
      } else {
        counts[direction] = 1;
      }

      return counts;
    }, {});

  return Object.keys(characterCountsPerTextDirection).reduce(
    (max, direction) => {
      if (
        !max["direction"] ||
        max.count < characterCountsPerTextDirection[direction]
      ) {
        return {
          direction: direction,
          count: characterCountsPerTextDirection[direction],
        };
      }

      return max;
    },
    {}
  ).direction;
}

console.log(dominantDirection("Hello!"));               // ltr
console.log(dominantDirection("Hey, مساء الخير"));      // rtl
