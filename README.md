# Form Page

[![React](https://img.shields.io/badge/React-18.2.8-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue)](https://www.typescriptlang.org/)
[![MUI](https://img.shields.io/badge/MUI-5.14.11-blue)](https://mui.com/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-7.47-blue)](https://react-hook-form.com/)
[![Yup](https://img.shields.io/badge/Yup-1.3.2-blue)](https://github.com/jquense/yup)

A simple, user-friendly and fully responsive website featuring a form built using React 18, TypeScript 5, MUI 5, React Hook Form 7, and Yup. This project consists of a form with four input fields (including a MUI datepicker) containing various validation rules. 

## Screenshots

![Simple form](./assets/form-screenshot.jpg)

![Logo hover](./assets/logo-hover.jpg)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features

- A form with four input fields validated by various rules:
    - If a chosen continent is Europe, then the surname (if filled in) must have more than two characters.
    - A required name field.
    - Doubling the font size if user's age is above 60 years with edge case handling of a possibility to have a birthday today.
- Elegant hover on the logo.
- Disabling the submit button if validation rules are not met.
- After the initial submit, the validation is run onChange.
- Simulated two second loading with an animated loading icon after submitting the form.
- Success message displayed after the loading icon.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/WoXuS/software-mind.git
cd software-mind
npm install
```

## Usage

To start the development server, run:
```bash
npm start
```

Open http://localhost:3000 to view the registration module in your browser.