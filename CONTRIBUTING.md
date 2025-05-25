# Contributing to Aswin's Portfolio

Thank you for your interest in contributing to my portfolio project! Whether it's fixing bugs, improving documentation, or suggesting new features, all contributions are welcome.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Code Style](#-code-style)
- [Commit Guidelines](#-commit-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Reporting Issues](#-reporting-issues)

## ✨ Code of Conduct

This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.

## 🚀 Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
   ```bash
   git clone https://github.com/your-username/portfolio-v2.git
   cd portfolio-v2
   ```
3. **Set up** the development environment (see README.md)
4. **Create a branch** for your changes
   ```bash
   git checkout -b feature/amazing-feature
   ```

## 🔄 Development Workflow

1. **Always sync** your local repository with upstream
   ```bash
   git fetch upstream
   git merge upstream/main
   ```
2. **Run tests** before committing
   ```bash
   # Frontend tests
   cd Frontend
   npm test
   
   # Backend tests
   cd ../Backend
   python -m pytest
   ```
3. **Commit** your changes following the commit guidelines
4. **Push** to your fork
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request** from your fork to the main repository

## 🎨 Code Style

### Frontend (React/JavaScript)
- Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use Prettier for code formatting
- 2 spaces for indentation
- Use functional components with hooks
- TypeScript types are encouraged

### Backend (Python)
- Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/) style guide
- Use type hints for all function parameters and return values
- Document all public functions with docstrings
- Keep functions small and focused

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Performance improvement
- `test`: Adding or modifying tests
- `chore`: Changes to the build process or auxiliary tools

**Example**:
```
feat(auth): add login with Google

- Add Google OAuth2 authentication
- Create user model and database migrations
- Add login/logout UI components

Closes #123
```

## 🔄 Pull Request Process

1. Ensure your code follows the style guidelines
2. Add tests for new features or bug fixes
3. Update documentation as needed
4. Ensure all tests pass
5. Request review from maintainers
6. Address any review comments
7. Once approved, squash your commits into a single, well-formatted commit

## 🐛 Reporting Issues

When creating an issue, please include:
- Clear, descriptive title
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/OS version if frontend-related
- Python/Node version if backend-related

## 📚 Additional Resources

- [Project Board](https://github.com/your-username/portfolio-v2/projects/1)
- [Issue Tracker](https://github.com/your-username/portfolio-v2/issues)
- [Code of Conduct](CODE_OF_CONDUCT.md)

Happy coding! 🎉
