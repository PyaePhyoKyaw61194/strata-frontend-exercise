# Strata Frontend Dev Exercise

Hi there 👋

First off, we'd like to thank you for your interest in joining the strata team! 
We are excited to have you apply and as part of the application process we have this small exercise to assess if you are a good fit for the team.

As a strata frontend dev, you will mainly be working with the following tech stack:

- Typescript
- Next.js / React
- TailwindCSS
- Vercel

This exercise is a simple task where you can show us your proficiency and style in our environment. 
We are looking for well typed code, good state management, separation of concerns, and familiarity with React best practices (hooks, memoized calls, etc). 

It should take around 2-4 hours to complete.

---

## The Exercise

Imagine we are building a competition for our users where we have a leaderboard and can view each users profiles. 
A visitor to the website can also like a user's profile, which will only be recorded for the current website visit. 

Your task is to complete the frontend code for two pages for a mock competition website. 

The two pages are outlines as the following:

**1. Leaderboard:**

- The leaderboard shows a list or grid view of the current user rankings.

**2. User Profile:**

- A user profile page will show the profile picture of a user and their user name.


### Provided to you:

There are several resources provided to you:

- Most importantly, there is an API to get the current leaderborad. You can query it at:

  - `api/leaderboard` - returns a new leaderboard order each time it is called.
  - `api/profile/{id}` - returns the user's profile with extended data.
    You can view how it works in the `pages/api` folder and it's type signatures at `types.d.ts`.

- The empty files for you to fill in at `pages/leaderboard/index.tsx` and `pages/profile/[username].tsx`

Routing and API access are mapped automatically to routes using Next.js's routes and API routes

---

## Key Considerations

While there are many ways to complete this task, we hope to learn how you approach such problems within a larger codebase and in a collaborative enviornment.

There are some key aspects that we would like you to keep in mind:

- Code should be clean, readable and type-safe.
- Separation of concerns between views and models, and reusable model code that leverages modern React.
- Reusable view code and React component composition using data-bound components in the right places.

---

## Requirements

**Leaderboard page**:

- This page should request the latest leaderboard rankings around every 20 seconds and update the leaderboard list.
- Each leaderboard entry should display the user's profile picture and username.
- Each leaderboard entry should show if we have liked the user's profile or not.

**User Profile page**:

- This page should show the user's name and profile picture.
- It should have a button/icon that allows a visitor to "like" the user's profile.
- There should be a back button to return to the leaderboard.

**General requirements**:
- Page designs should be responsive and work well on both desktop and mobile browsers.
- You may deploy the page using a free Vercel account and share the preview URL with us.
- You may add any additional functionality and pages you see fit if you complete the main assignment.

**NOTES**:

- User profile images are located in the public resource folder at `users/[username].png`.
- "Likes" do not have to persist beyond a local session (i.e. no need to save in any database. Can just use react state management)

### Project Installation, Setup, Submission

1. Create a fork of this repo.
2. Install dependencies with
   > `yarn install`
   > or
   > `npm install`
3. Run local development server with `yarn dev`, it will be available on `localhost:3000`
4. Complete `pages/leaderboard/index.tsx` and `pages/user/[username].tsx` pages.
5. Deploy to vercel.
6. Send the strata team a link to the deployment and the forked repo so we can take a look! You can email us at `jobs@strata.gallery`

Feel free to contract us with any questions you have at `jobs@strata.gallery`
