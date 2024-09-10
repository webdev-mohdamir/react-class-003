# What is React Router?

React Router is a library that helps manage navigation in React applications. It allows you to create multiple "pages" within a single-page application (SPA), giving users the feel of a traditional multi-page app. It handles the changing of views while keeping the URL in sync with the application’s state.

## Why Use React Router?

- ### URL Sync

  - React Router enables your app’s components to sync with the browser's URL. This keeps the state and view in sync with specific routes (URLs).

- ### Declarative Routing

  - Routes are declared in JSX, making them easy to reason about and maintain.

- ### SPA Benefits

  - Unlike traditional web pages that reload with every navigation, React Router allows smooth navigation between pages without reloading, providing a fast user experience.

## How React Router Works

React Router uses two core components to define routes and control navigation:

- ### BrowserRouter

  - The container that wraps your entire application, enabling routing.

- ### Route
  - Specifies the URL path and the component to render when that path is accessed.
