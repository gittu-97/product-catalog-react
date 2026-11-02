The exact terminal command you need depends on whether you are creating a new project or running an existing one.
## 1. Creating a New React Project (Recommended Framework)
Modern development uses Vite to create blazing-fast React applications. Run this command in your terminal: [1, 2, 3] 

npm create vite@latest my-react-app -- --template react

(Replace my-react-app with your preferred folder name) [1, 3] 
## 2. Running an Existing React Project
If you have downloaded a React project or just finished creating one, navigate into the project folder and use these commands:

* Install Dependencies: Downloads the necessary node_modules required for the app to work. [4, 5] 

npm install

* Start the Development Server: Launches your project locally (usually at http://localhost:5173 for Vite or http://localhost:3000 for older Create React App setups).

npm run dev

(Note: If the project was built using the older legacy framework, use npm start instead). [1, 4, 6] 

## 3. Production Build
When you are ready to deploy your app to the web, build an optimized production version: [7, 8] 

npm run build


[1] [https://www.w3schools.com](https://www.w3schools.com/react/react_getstarted.asp)
[2] [https://www.codecademy.com](https://www.codecademy.com/article/how-to-create-a-react-app)
[3] [https://www.tftus.com](https://www.tftus.com/blog/how-to-start-a-reactjs-project)
[4] [https://create-react-app.dev](https://create-react-app.dev/docs/getting-started/)
[5] [https://www.youtube.com](https://www.youtube.com/watch?v=K9JB4T1jKsw)
[6] [https://www.youtube.com](https://www.youtube.com/watch?v=b6NQrorY9kA)
[7] [https://www.npmjs.com](https://www.npmjs.com/package/react)
[8] [https://www.freecodecamp.org](https://www.freecodecamp.org/news/create-react-app-npm-scripts-explained/)
