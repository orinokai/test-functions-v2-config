var handler = () => {
  return new Response("Hello World")
};
var config = {
  path: "/broken"
};
export {
  config,
  handler as default
};
