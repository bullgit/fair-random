const random = (min, max) =>
  Math.pow(
    Math.ceil(Math.random()) * Math.ceil(Math.random()) +
      Math.ceil(Math.random()),
    (Math.sin(
      Math.PI /
        (Math.cos(Math.floor(Math.random())) +
          Math.cos(Math.floor(Math.random())))
    ) +
      Math.cos(Math.floor(Math.random()))) %
      Math.pow(Math.E, Math.log(3))
  );

export default random;
