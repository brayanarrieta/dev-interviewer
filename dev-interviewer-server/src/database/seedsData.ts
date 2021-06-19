import { Question, Tag } from '../types';

interface Seed extends Tag {
    questions?: Question[]
}

const DEFAULT_VOTES = 0;

const seeds: Seed[] = [
  {
    name: 'React.js',
    description: 'A library',
    slug: 'react',
    questions: [
      {
        question: 'What is React?',
        answer: `React is an open-source JavaScript library created by Facebook 
        for building complex, interactive UIs in web and mobile applications.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is render prop pattern?',
        answer: `The term “render prop” refers to a simple technique for sharing code 
        between React components using a prop whose value is a function.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is Atomic Design Pattern?',
        answer: `Atomic design, developed by Brad Frost and Dave Olsen, is a methodology for 
        crafting design systems with five fundamental building blocks, which, when combined, 
        promote consistency, modularity, and scalability.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is JSX?',
        answer: `JSX stands for JavaScript XML. JSX allows us to write HTML in React. 
        JSX makes it easier to write and add HTML in React.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What are pure components?',
        answer: `A React component is considered pure if it renders the same output for the 
        same state and props. For class components like this, React provides the PureComponent 
        base class. Class components that extend the React.PureComponent class are treated as 
        pure components.

        Pure components have some performance improvements and render optimizations since React 
        implements the shouldComponentUpdate() method for them with a shallow comparison for 
        props and state.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },

    ],
  },
  {
    name: 'Javascript',
    description: 'Programming language',
    slug: 'javascript',
    questions: [
      {
        question: 'What is hoisting?',
        answer: `Hoisting is the JavaScript interpreter’s action of moving all variable 
        and function declarations to the top of the current scope.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is closure and what are the advantages of using closure?',
        answer: `A closure is a combination of a function bundled together (enclosed) with 
        references to its surrounding state (the lexical environment). In other words, 
        a closure gives you access to an outer function’s scope from an inner function. 
        In JavaScript, closures are created every time a function is created, at 
        function creation time.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What are the advantages of using closure?',
        answer: `Module design, currying, functions like once, data hiding and encapsulation, 
        settimeout, memoize, and many others.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is prototypal inheritance?',
        answer: `The core idea of Prototypal Inheritance is that 
        an object can point to another object and inherit all its properties.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is an event loop?',
        answer: `The event loop(a gatekeeper): it constantly checks whether or not 
        the call stack is empty. If it is empty, new functions are added from the 
        event queue. If it is not, then the current function call is processed.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
    ],
  },
  {
    name: 'Golang',
    description: 'Programming language',
    slug: 'golang',
    questions: [
      {
        question: 'What is Golang?',
        answer: `Golang, also known as Go Language, is a computer language developed by 
        Google employees. It was designed to make it easier for programmers to create 
        and adapt their work for various situations.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What makes Golang work so fast?',
        answer: `Golang is incredibly fast, thanks to its design and syntax. 
        Unlike many other programming languages, it has a small syntax and concurrency model, 
        so it is faster. It's also incredibly fast to compile, and it is capable of 
        generating machine code.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'Who created Golang?',
        answer: `Golang or Go is an open-source programming language created at Google by 
        Robert Griesemer, Rob Pike, and Ken Thompson. It went live on November 10. 2009.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'Is Go case sensitive?',
        answer: `Yes, GoLang is case-sensitive which intimates in Go. Both 'ab' and 'AB' 
        are distinct from one another, so listing them in the same code does not reveal 
        any errors.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'Why was Golang developed?',
        answer: `For app developers, Golang is a great alternative to C++ and Java, 
        particularly in its context as it relates to what Google needs for its network 
        servers and distributed systems. It was designed to eliminate the sluggish 
        pace of large server and software development processes and to make it 
        easier to program for scalability and large systems.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
    ],
  },
  {
    name: 'Node.js',
    description: 'Framework',
    slug: 'nodejs',
    questions: [
      {
        question: 'What Is Node.js?',
        answer: `Node.js is an extremely powerful framework developed on Chrome’s V8 JavaScript 
        engine that compiles the JavaScript directly into the native machine code. It is a 
        lightweight framework used for creating server-side web applications and extends JavaScript 
        API to offer usual server-side functionalities. It is generally used for large-scale 
        application development, especially for video streaming sites, single page application, 
        and other web applications.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'Why Node.js is single threaded?',
        answer: `Node.js uses a single threaded model in order to support async processing. 
        With async processing, an application can perform better and is more scalable under web 
        loads. Thus, Node.js makes use of a single-threaded model approach rather than typical 
        thread-based implementation.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'How do Node.js works?',
        answer: `Node.js is a virtual machine that uses JavaScript as its scripting language 
        and runs on a v8 environment. It works on a single-threaded event loop and a 
        non-blocking I/O which provides high rate as it can handle a higher number of 
        concurrent requests. Also, by making use of the ‘HTTP’ module, Node.js can run on 
        any stand-alone web server. `,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is package.json?',
        answer: `The package.json file in Node.js is the heart of the entire application. 
        It is basically the manifest file that contains the metadata of the project where 
        we define the properties of a package.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },
      {
        question: 'What is an Event loop in Node.js and how does it work?',
        answer: `An event loop in Node.js handles all the asynchronous callbacks in an 
        application. It is one of the most important aspects of Node.js and the reason 
        behind Node.js have non-blocking I/O. Since Node.js is an event-driven language, 
        you can easily attach a listener to an event and then when the event occurs the 
        callback will be executed by the specific listener. Whenever functions like setTimeout, 
        http.get, and fs.readFile are called, Node.js executed the event loop and then proceeds 
        with the further code without waiting for the output. Once the entire operation is 
        finished, Node.js receives the output and then executes the callback function. 
        This is why all the callback functions are placed in a queue in a loop. 
        Once the response is received, they are executed one by one.`,
        votesUp: DEFAULT_VOTES,
        votesDown: DEFAULT_VOTES,
      },

    ],
  },
];

export default seeds;
