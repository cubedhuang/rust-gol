import init, { greet } from "./pkg/wasm_gol.js";

init().then(wasm => {
	greet("world");
});
