# Unit Tests Practice

A comprehensive JavaScript project demonstrating best practices for unit testing, code linting, and continuous integration.

## 🚀 Features

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

## 📋 Code Quality

### ESLint Configuration

The project uses strict ESLint rules enforcing:

- Single quotes for strings
- 2-space indentation
- Semicolon usage
- Trailing commas in multiline structures
- Consistent naming conventions (camelCase)
- No unused variables
- Modern ES6+ syntax preferences

### Pre-commit Hooks

Husky and lint-staged automatically run before each commit:

1. **ESLint**: Automatically fix code style issues
2. **Tests**: Ensure all tests pass before committing

## 🔄 Continuous Integration (Minimal)

Lightweight GitHub Actions pipeline optimized for free tier:

### Triggers:

- **Pull Requests to main**: Validates feature branch merges
- **Pushes to main**: Final validation after merge

### Single Quality Check Job:

1. **ESLint**: Code style and quality validation
2. **Tests**: Complete test suite with coverage
3. **Fast feedback**: ~2-3 minutes total runtime

### Free Tier Optimizations:

- ✅ **Single job**: Combines lint and test (saves setup time)
- ✅ **Node.js 18 only**: No matrix testing (saves minutes)
- ✅ **Concurrency control**: Auto-cancels previous runs
- ✅ **Targeted triggers**: Only runs on main branch activity
- ✅ **Essential checks**: Focus on code quality for merges## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd unit-tests-practice
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the test suite**:

   ```bash
   npm test
   ```

4. **Check code quality**:

   ```bash
   npm run lint
   ```

5. **Build the project**:
   ```bash
   npm run build
   ```

## 📊 Coverage Report

The project maintains **100% test coverage** across all utility functions:

- **Statements**: 100%
- **Branches**: 100%
- **Functions**: 100%
- **Lines**: 100%

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes (pre-commit hooks will run automatically)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.
