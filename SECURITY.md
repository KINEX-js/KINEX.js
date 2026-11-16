# Security Policy

The KINEX TEAM takes the security and reliability of KINEX.js seriously.

We appreciate responsible security research and encourage developers to report vulnerabilities that may affect the library, its components or its users.

## Supported Versions

Security updates are prioritized for actively maintained versions of KINEX.js.

| Version | Security Support |
|---|---|
| Latest stable release | Supported |
| Previous releases | Evaluated individually |
| Development and experimental versions | Not guaranteed |

Users are encouraged to use the latest stable release whenever possible.

## Reporting a Vulnerability

If you discover a potential security vulnerability in KINEX.js, please report it responsibly.

**Do not disclose security vulnerabilities through public GitHub Issues, Discussions or Pull Requests.**

Instead, use GitHub's private vulnerability reporting feature, if enabled for this repository.

Please include the following information in your report:

- A clear description of the vulnerability.
- The affected component or file.
- The affected version, if known.
- Steps to reproduce the issue.
- Potential security impact.
- Proof of concept, screenshots or relevant code, where appropriate.

Do not include real user credentials, private data or other sensitive information in your report.

## Responsible Disclosure

We request that security researchers:

- Allow the maintainers reasonable time to investigate and address the vulnerability.
- Avoid publicly disclosing the issue before a fix or coordinated disclosure.
- Avoid accessing, modifying or exposing data belonging to other users.
- Avoid disrupting services or causing unnecessary damage during testing.
- Limit testing to systems and environments they are authorized to assess.

## Response Process

After receiving a vulnerability report, the maintainers aim to:

1. Acknowledge receipt of the report.
2. Review and assess the reported vulnerability.
3. Determine affected components and versions.
4. Develop and test an appropriate fix.
5. Release security updates where necessary.
6. Coordinate public disclosure when appropriate.

Response and resolution times may vary depending on the severity and complexity of the issue.

## Security Considerations for Developers

KINEX.js is a client-side JavaScript library. Developers integrating its components should follow general web security practices.

- Only load scripts from trusted sources.
- Use version-pinned CDN URLs.
- Keep dependencies updated.
- Avoid executing untrusted JavaScript.
- Validate and sanitize untrusted user input.
- Review component behaviour before integrating it into production projects.
- Use HTTPS when loading external resources.

Individual components may have additional security considerations, which should be documented where applicable.

## Scope

This policy covers security vulnerabilities affecting:

- KINEX.js source code.
- Officially maintained components.
- Official distribution files.
- Dependencies maintained or distributed as part of the project.

Issues involving unrelated third-party services or independently modified copies of the library may fall outside the project's direct responsibility.

## Acknowledgements

We appreciate individuals who responsibly report security vulnerabilities and help improve the security of KINEX.js.

---

**KINEX TEAM**

Building tools and experiences for the modern web.

Repository: https://github.com/KINEX-js/kinex.js