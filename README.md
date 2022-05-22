# Todo Rabbit

Todo app with Firebase, done for learning

Based on this tutorial https://blog.bitsrc.io/build-a-todo-list-application-using-react-and-firebase-5ce2feba9489

- [x] Read, write, delete
- [x] Deploy to test
- [ ] Deploy to production
- [x] User login
- [ ] Each user has their own todos
- [ ] Update rules for production
- [ ] Storybook

## Dev notes

- Use firebase-cli version 10.9.2 (`pnpm install -g firebase-tools@10.9.2`) otherwise emulator ui breaks (see [node.js - Firebase Emulator fails at startup Cannot find module --dns-result-order=ipv4first - Stack Overflow](https://stackoverflow.com/questions/72313155/firebase-emulator-fails-at-startup-cannot-find-module-dns-result-order-ipv4fir))

## Planning

- Auth
  - Everyone can sign in - login, with email and password or with google
  - Firebase auth
  - User can logout
  - Logged out users go to /login page
  - Logged in users go to /
- App
  - User logs in and can view, create, edit and delete todos
  - Each user has their own todos
  - One user cannot see todos from other users

## Dev flow

- Make changes in `dev` branch (or feature branch)
- Push `dev` branch to remote as I work
- Make sure new code works in localhost
- Merge `dev` to `main`
- Deploy to netlify by pushing `main`

## Reads

- [Build a real-time Todo App in 30 minutes with ReactJS, TypeScript and Firebase](https://www.sipios.com/blog-tech/build-a-real-time-todo-app-in-30-minutes-with-reactjs-typescript-and-firebase)
- [Firebase launch checklist](https://firebase.google.com/support/guides/launch-checklist)

## Resources

- [Firebase code samples](https://firebase.google.com/docs/samples)