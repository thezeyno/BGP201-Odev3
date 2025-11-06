type ParseRouteParams<T> = 
  T extends ${string}/:${infer ParamName}/${infer Rest}
    ? { [K in ParamName]: string } & ParseRouteParams</${Rest}>
    : T extends ${string}/:${infer ParamName} 
      ? { [K in ParamName]: string } 
      : {};

type Route1 = "/users/:userId/posts/:postId";
type Params1 = ParseRouteParams<Route1>;

type Route2 = "/home";
type Params2 = ParseRouteParams<Route2>;

let p1: Params1 = { userId: "u1", postId: "p2" };
let p2: Params2 = {};
console.log("Soru 20 Başarılı!");
export {};