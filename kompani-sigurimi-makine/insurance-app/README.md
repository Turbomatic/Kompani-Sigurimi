# Insurance App

## Overview
This project is an Angular application designed for a car insurance company. It provides functionalities for different types of users: Admin, Financier, and Broker. The application allows users to manage insurance policies, report damages, and generate financial reports.

## Features
- **User Roles**:
  - **Admin**: Manages overall functionalities of the insurance company.
  - **Financier**: Responsible for financial calculations, profits, and losses.
  - **Broker**: Facilitates insurance calculations and policy management.

- **Insurance Types**:
  - Kasko
  - Full Kasko
  - Green Card

- **Damage Reporting**:
  - Users can report damages and calculate their values.
  - The application supports different types of damages, including total repairs and minor scratches.

- **Financial Calculator**:
  - A financial calculator to compute insurance values based on vehicle age and engine power.

- **Profit and Loss Report**:
  - Generates reports based on the company's performance throughout the year.

## Project Structure
```
insurance-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── admin
│   │   │   ├── financier
│   │   │   ├── broker
│   │   │   ├── insurance-form
│   │   │   ├── damage-form
│   │   │   └── report
│   │   ├── modules
│   │   │   ├── admin
│   │   │   ├── financier
│   │   │   ├── broker
│   │   │   └── app-routing.module.ts
│   │   ├── services
│   │   ├── interfaces
│   │   ├── mocks
│   │   └── observers
│   ├── app.component.ts
│   └── app.module.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd insurance-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
To run the application, use the following command:
```
ng serve
```
Then open your browser and navigate to `http://localhost:4200`.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bugs.

## License
This project is licensed under the MIT License.