# automation-task 🤖

Hey candidate! Thank you for your time 🙂

We are Tipalti's Procurement group (also known as Approve).
Our group works in fast development cycles, meaning versions might be released multiple times a day.
All those versions are verified using our automation tests before every release, which means that all of our developers rely on our tests in order to release their versions.

## Task
The main goal of this task is to write a test suite that will serve as coverage for the application before the developers release new versions of it.
this means that the suite should focuse on the important features of the application, while also keeping feature coverage in mind.

### todoMVC ✅
This is a [simple todo application](https://todomvc.com/examples/react/#/) written in React.js and has very basic capabilities:
- add todo
- remove todo
- mark todo as done
- filter active todos
- filter completed todos

### playwright 🎭
[Playwright](https://playwright.dev/docs/1.17/intro) is an open-source NodeJS based framework by Microsoft, it's a fairly new headless browser testing framework similar to puppeteer.
We use Playwright to write end-to-end tests that run as part of our CI cycle.

## Steps 📃
- Get familiar with the application and it's functionality
- Define test scenarios for the application's features/functionality
- Fork this repository
- Write test spec files under `src/tests/` directory, use `example.spec.ts` file and playwright documentation as reference
- Write test plans and create a new project for each plan in `playwright.config.ts`
- To test your work:
  - to run all tests use `npm run test` in your integrated terminal.
  - To test a specific project use `npm run test -- --project=<project>` in your integrated terminal, where `<project>` is an item from `projects` array in `playwright.config.ts`
  - To test a specific file use `npm run test <file_name>` in your integrated terminal, where `<file_name>` is the name of a file from `/src/tests` directory

## Criteria 👨🏻‍🏫
- All tests should pass
- Aim for maximal coverage of the application
- The tests should be as readable and easy to maintain as possible
- Use the most fitting Playwright functions

## Submission 🏁
- When you're done, send a link of your repository to [approve-qa@tipalti.com](mailto:approve-qa@tipalti.com)
