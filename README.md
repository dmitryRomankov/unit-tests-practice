# Unit Tests Practice

## Features

- **Unit Testing**: Comprehensive test suite using Mocha and Chai
- **Code Coverage**: 100% test coverage analysis using c8
- **Code Linting**: ESLint with strict coding standards
- **Pre-commit Hooks**: Automated code quality checks using Husky and lint-staged
- **CI/CD Pipeline**: GitHub Actions workflow for automated testing and deployment
- **Babel Transpilation**: Modern JavaScript features with backward compatibility

## 📁 Project Structure

```
├── src/utils/                  # Source utility functions
│   ├── arrayUtils.js          # Array manipulation utilities
│   ├── mathUtils.js           # Mathematical operations
│   ├── stringUtils.js         # String processing utilities
│   ├── studentKnowledgeCheckerUtil.js # Student assessment logic
│   └── usersListUtils.js      # User data management
├── test/utils/                # Test files (mirrors src structure)
├── .github/workflows/         # CI/CD pipeline configuration
├── .husky/                   # Git hooks configuration
├── babel.config.js           # Babel transpilation settings
├── eslint.config.js          # ESLint rules and configuration
└── .mocharc.json            # Mocha test runner configuration
```

## 🛠️ Available Scripts

| Command                   | Description                                |
| ------------------------- | ------------------------------------------ |
| `npm test`                | Run all tests with coverage + HTML report  |
| `npm run coverage`        | Run code coverage analysis only            |
| `npm run lint`            | Check code for linting errors              |
| `npm run lint:fix`        | Automatically fix linting issues           |
| `npm run build`           | Transpile code using Babel                 |
| `npm run clean`           | Remove build artifacts and coverage files  |
| `npm run ci`              | Run full CI pipeline (lint + test + build) |
| `npm run quick-check`     | Quick lint and test for development        |
| `npm run precommit-check` | Run checks before committing               |

## 🧪 Testing

The project includes comprehensive unit tests covering:

- **Array Operations**: Finding min/max values, removing duplicates
- **Mathematical Functions**: Basic arithmetic with proper error handling
- **String Manipulations**: Capitalization, reversal, palindrome detection
- **Data Validation**: Student knowledge assessment logic
- **User Management**: Filtering, sorting, and searching user data

### Running Tests

```bash
# Run all tests with coverage
npm test

# Run tests and generate HTML coverage report
npm run coverage

# Run specific test file
npx mocha test/utils/arrayUtils.test.js
```
