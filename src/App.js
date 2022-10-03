import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      What is the Difference between react and react native? Which one is library or framework ? <br></br>
       first of all i want to say that React is JavaScript Library & React-Native is JavaScript Framework.
       Judging from the name we can say that React-Native is React's Younger sibling.
       While React is a Library of Reusable components for building web user interfaces and components.
      Whereas React-Native is designed to build mobile Applications with Reusable components.
       React Native is natively rendering mobile applications for iOS and Android.
      instead of targeting browser, it targets mobile platform.<hr></hr>

      What is the package name you are using for routing ?<br></br>
       The very first step to using React Router is to install the appropriate package.
      They are technically three different packages: React Router, React Router DOM, and React Router Native.
       React Router DOM is for web applications and React Router Native is for mobile applications made with React Native.
       The first thing that you'll need to do is install React Router DOM using npm
       we have to write in Terminal i.e. npm install react-router-dom.
       Once it's installed, we can bring in our first component which is required to use React router which is called BrowserRouter.
       It's a common practice to alias (rename) BrowserRoute as simply 'Router' when it is imported.
      will usually see it wrapped around or within the main app component:<hr></hr>


       What is package.json ?<br></br>
       This file is a kind of manifest file for your application.
       This file plays a very important role in the react application development and deployment.
      It records important metadata about a project which is required before publishing to NPM.
      This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.
      The package.json file is the heart of any Node project.<hr></hr>

      How do you pass data from parent to child ?<br></br>
       props are used to comminucate between two component.
       we can easily pass our data from one component to another using props.<hr></hr>

       What is lazy loading in react ?
Soln:
      it's also called on-demand loading.<br></br>
      Lazy Loading is an optimization technique for the online content, be it a website or web app.
      instead of loading entire web page and rendering it to the user in one go as in bulk loading, the concept taught us i.e. loading only the required section and delays the remaining, until it needed by user.

</div>
  );
};
      export default App;


 
