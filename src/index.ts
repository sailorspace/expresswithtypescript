import { createApp } from "./createApp";

const app = createApp();
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`running on port : ${PORT}`);
});   

