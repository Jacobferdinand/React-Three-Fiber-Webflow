# React-Three-Fiber-Webflow 😘
Starter file with vite to render react three fiber inside a webflow project.
React-three/drei is already includet.

ES-lint with react plugin and prettier is also includet in the repository.


install the dependencies: npm i

run dev server: npm run dev


✋✋✋
During developement you need to add this code inside the head tag of your webflow project: 

<script type="module">
import RefreshRuntime from "http://localhost:5173/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>


...you can remove it on your production build.

👂
During developement, you also need to add this at the end of the body tag:


<script type="module" src="http://localhost:5173/@vite/client"></script>
<script type="module" src="http://localhost:5173/src/main.jsx"></script>


👉👉👉
You might need to change the localhost number.
for production you want to to change it to the production URL. Don't forget to update the _headers file in the public folder or you will get a CORS ERROR.


To render your project inside Webflow , you also need to add a div with the id="root" and set it to the appropriate size.


Have Fun😄

