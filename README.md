# React Testing Workshop

## Overview

This app serves as a hands-on workshop designed to help you learn and improve **React Testing** skills using **React Testing Library** (RTL). 

In this workshop, we will refactor the app to make it more **testable**. This process involves applying **best practices** and **design patterns** that make the app easier to test, maintain, and scale. We’ll focus on making each component simpler to test and ensuring that interactions between them are easier to verify.

## Aim of the Workshop

The goal of this workshop is to:

1. **Write Tests**: You’ll write unit and integration tests for various components of the app using React Testing Library.
   
2. **Refactor for Testability**: We will refactor the app to make it more testable by:
   - Improving component structure.
   - Extracting logic where possible.
   - Making components more predictable and easier to interact with in tests.

## Why Refactor for Testability?

Writing tests for your app can sometimes be challenging, especially if the app isn’t structured in a way that makes testing easy. Some common issues that affect testability include:

- **Large, monolithic components** that are hard to reason about and test.
- **Tightly coupled code** where different parts of the app are heavily dependent on each other.
- **Hard-to-mock dependencies** like direct DOM manipulations or API calls.

In this workshop, we will refactor parts of the TODO app to:
- **Isolate side effects** like API calls and local state management.
- **Make components smaller and more focused** so they are easier to test in isolation.
- **Abstract out business logic** into reusable hooks or utility functions.
  
By refactoring, we’ll make sure the app is structured in a way that testing becomes simpler and more effective.

## Refactoring Focus Areas

Here are the key areas we’ll focus on for refactoring:

### 1. **Component Decomposition**

- Break down large components into smaller, more focused components that are easier to test.
- For example, instead of having a large `App` component handle both the form and the list, we’ll create smaller components like `TodoForm`, `TodoList`, and `StatsSection`.

### 2. **State Management**

- Move API calls and state logic into custom hooks (e.g., `useTodos`) to isolate side effects.
- This allows us to mock the hook in tests and test the components without relying on external services.

### 3. **Pure Functions and Utility Functions**

- Extract any business logic into **pure functions** or utility functions.
- Pure functions are easier to test because they don’t rely on external states or side effects.

### 4. **Prop-Driven Components**

- Refactor components to rely on **props** for data and behavior rather than using internal state for everything. This will make them more predictable and easier to test.

---

### Refactoring Plan

In this workshop, we’ll focus on the following steps:

1. **Decompose the App**:
   - Split the `App` component into smaller components: `TodoList`, `TodoItem`, `TodoForm`, `StatsSection`, etc.
   
2. **Create Custom Hooks**:
   - Extract the logic for fetching, adding, and updating tasks into a custom hook (`useTodos`). This will make the logic testable in isolation and reduce code duplication.

3. **Mocking and API Calls**:
   - Update the app to allow API calls to be easily mocked during testing. We will use mock data during tests instead of hitting real APIs.

---

## Testing Goals

Once we refactor the app, you will be able to test the following more effectively:

- **Rendering components**: Test if components render the correct UI based on the props they receive.
- **User interactions**: Test how components respond to user actions (e.g., adding a new task, marking tasks as completed or in progress).
- **Side Effects**: Test asynchronous behaviors like fetching data and updating the backend.
- **Component behavior**: Ensure each component behaves correctly in different states (loading, error, success).

---

## Conclusion

By the end of this workshop, you will have learned:

- How to refactor an app to make it more testable and maintainable.
- How to write unit and integration tests using **React Testing Library**.
- How to mock API calls and manage side effects in tests.
- Best practices for structuring React apps to make them easier to test.

Refactoring is a critical part of ensuring your React app is testable, scalable, and maintainable in the long run. This workshop will give you hands-on experience in both writing tests and refactoring code to improve testability.

---

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)