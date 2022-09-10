module.exports = {
  pages: [
    {
      title: "First Page",
      content: "This is my first page. I hope I love writing articles as much as I love reading them.",
      status: 'closed',
      authorId: 2
    },
    {
      title: "Duff",
      content: "This is Homer Simpson's drink of choice.",
      status: 'closed',
      authorId: 1
    },
    {
      title: "Living the Glam Life",
      content: "Do you even? I swear that half of you are posing.",
      status: 'open',
      authorId: 1
    },
    {
      title: "Eleanor of Aquitaine",
      content: "This medieval queen was married to both Louis VII of France and Henry II of England.",
      status: 'open',
      authorId: 2
    },
    {
      title: "React",
      content: `Declarative
      React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
      
      Declarative views make your code more predictable and easier to debug.
      
      Build encapsulated components that manage their own state, then compose them to make complex UIs.
      
      Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
      
      We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
      
      React can also render on the server using Node and power mobile apps using React Native.
    `,
      status: 'open',
      authorId: 1
    }
  ],
  users: [
    { name: 'Annie Position', email: 'annie@email.com' },
    { name: 'Bea O-Problem', email: 'bea@email.com' },
  ],
  tags: [
    {
      name: 'happy',
    },
    {
      name: 'youcandoanything',
    },
    {
      name: 'canpeopledoeverything',
    },
    {
      name: 'royalty',
    },
    {
      name: 'frontend'
    }
  ]
}
