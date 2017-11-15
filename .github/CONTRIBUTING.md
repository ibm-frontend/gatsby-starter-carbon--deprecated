# Contributing to Awesomeness

This document serves as a reference guide for best practices when contributing to this project.

## Submitting Issues
- Avoid duplicate issues. Before submitting an issue, perform a search to see if a similar issue has already been submitted.
- Please follow and fully fill out the issue template that is generated when creating a new issue.
- When submitting an issue, ensure that the sidebar has been filled out to the best of your knowledge (pipeline, labels, estimate, assignee, etc).
- Issues that have a number of sub-items that need to be complete should use task lists to track the sub-items in the main issue comment.
- When submitting a browser bug, please include the browser, version, operating system, and operating system version.
- Include screenshots and animated GIFs whenever possible; they are immensely helpful.

## Pull Requests
- **DO NOT ISSUE A PULL REQUEST WITHOUT FIRST SUBMITTING AN ISSUE**
- Pull request titles should be descriptive, explaining at the high level what it is doing
- Please follow and fully fill out the pull request template that is generated when creating a new pull request.
- Please also follow our [Pull Request Guidelines](#issue-guidelines) when creating a new pull request.
- Pull requests should reference their related issues. If the pull request closes an issue, [please reference its closing from a commit messages](https://help.github.com/articles/closing-issues-via-commit-messages/). Pull requests not referencing any issues will be closed.
- Commit messages _must_ begin with the [relevant emoji](#emoji-cheatsheet) describing what the commit does.
- Do not squash or rebase commits when submitting a Pull Request
- Ensure no Emoji tags are used in the title of the Pull Request

## Commit Messages
Using emojis on commit messages provides an easy way of identifying the purpose or intention of a commit with only looking at the emojis used.

Please follow the following template for commit messages:
```bash
:<emoji>: <subject>
```
`<emoji>` being the name of the [relevant emoji](#emoji-cheatsheet) describing the changes (without wrapping ::) and `<subject>` being the description of changes. Commit messages may have multiple emoji.

Example commits may look something like the following:

```bash
git commit -m ":art: Refactor lookup system"
```

```bash
git commit -m ":lock: Fix XSS vulnerability"
```

```bash
git commit -m ":new::boom: Require author in content types" -m "Previously working content types will now throw if author is not present, so this is a breaking change"
```

It's highly recommended to utilize the [gitmoji cli](https://github.com/carloscuesta/gitmoji-cli) to aid in formatting these messages easily.

## Emoji Cheatsheet
When writing commits, please start the commit message with an applicable Emoji. Emoji should not be used at the start of issue or pull request titles.

Please adhere to the emoji meanings associated within the [gitmoji project](https://github.com/carloscuesta/gitmoji/). A full list of applicable emoji and their descriptions can be found [on the website](https://gitmoji.carloscuesta.me/). An incomplete, but commonly-used reference is below.

- :art: `:art:` Improving structure / format of the code.
- :zap: `:zap:` Improving performance.
- :fire: `:fire:` Removing code or files.
- :bug: `:bug:` Fixing a bug.
- :sparkles: `:sparkles:` Introducing new features.
- :memo: `:memo` Writing docs.
- :lipstick: `:lipstick:` Updating the UI and style files.
- :lock: `:lock:` Fixing security issues.
- :rotating_light: `:rotating_light:` Removing linter warnings.
- :construction: `:construction:` Work in progress.\
- :green_heart: `:green_heart:` Fixing CI Build.
- :hammer: `:hammer:` Refactoring code.
- :wrench: `:wrench:` Changing configuration files.
- :heavy_plus_sign: `:heavy_plus_sign:` Adding a dependency.
- :heavy_minus_sign: `:heavy_minus_sign:` Removing a dependency.
- :globe_with_meridians: `:globe_with_meridians:` Internationalization and localization.
- :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` Merging branches.
- :truck: `:truck:` Moving or renaming files.
- :bento: `:bento:` Adding or updating assets.
- :ok_hand: `:ok_hand:` Updating code due to code review changes.
- :wheelchair: `:wheelchair:` Improving accessibility.
- :bulb: `:bulb:` Documenting source code.
