# Multi-Step Poll Application

This is a multi-step poll application built using React and Redux. The application allows users to navigate through various questions using a carousel, answer each question, and submit their responses.

## Features

Multi-step form with a carousel for navigation.\
Redux for state management.\
API integration for submitting data.\
Tests using Jest and React Testing Library.\

## Technologies

React.\
Redux.\
TypeScript.\
Jest.\
React Testing Library.\
Ant Design for UI components.\

# Getting Started

## Prerequisites

Make sure you have Node.js and npm installed on your machine.

## Installation

Clone the repository.\

### `git clone https://github.com/mallikarjunan1351/multi-step-poll-app.git`
### `cd multi-step-poll-app`

Install the dependencies.\

### `npm install`

## Running the Application

To start the development server, run:

### `npm start`

This will start the application on http://localhost:3000.

## Running Tests

To run the tests, use:

### `npm test`

## If you encounter dependency resolution issues, try running:

### `npm install --legacy-peer-deps`
### `npm install --force`

## Folder Structure

src/
    api/: Contains the mock API functions
    components/: Contains the React components
    redux/: Contains Redux actions, reducers, and store configuration
    styles/: Contains the CSS files
    tests/: Contains the test files

# Components
## PollForm
The main component that renders the poll form. It includes the carousel for navigation and a summary of answers.

## Carousel
A component that displays the steps of the poll and allows navigation between them using up and down arrows.

## Step
A component that renders the options for each step/question.

## Summary
A component that displays a summary of all answers before submission.

## API
Mock API.\
The mock API simulates a server response. The submitData function sends a POST request to a placeholder API.

## Testing
Tests are written using Jest and React Testing Library. They cover the main functionalities of the components and API calls.