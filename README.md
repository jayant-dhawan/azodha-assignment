# Azodha Assignment

Assignment for interview process.

## Instructions
``` bash
# Install packages
$ npm install
```
``` bash
# Run the app in dev mode
$ npm run dev
```

## Assignment Overview:

### Login Page:

- Create a login form with username and password fields (no API calls needed).
- Use a random pair of credentials (e.g., username: user123, password: password123) for the login validation.
- Once the user successfully logs in, the app should redirect to the onboarding flow.

### Onboarding Step 1 – Personal Profile:

- Capture name, age, email, and profile picture.

### Onboarding Step 2 – Favorite Songs List:

- Allow users to input a list of their favorite songs, with the ability to add more songs dynamically using Formik.

### Onboarding Step 3 – Payment Information:

- Capture card details (This step should include basic input fields for card number, expiry date, and CVV).

### Onboarding Step 4 – Success:

- Display a success message indicating the completion of the onboarding process.

### Home Page:

- Once onboarding is complete, the user should be directed to a home page with a welcome message.

## Requirements:

- State Management: Use Redux for managing the state of each onboarding step.

- Persistence: Use localStorage to store the state of the user's progress at each step of the onboarding process. This way:

- If the user closes the browser and returns later, the onboarding should resume from the step where they left off.

- If the user has already completed the onboarding, they should be directly redirected to the home page on subsequent visits.
  Navigation: Users should be able to move forward and backward between onboarding steps, and the data from previous steps should be retained.

- No API calls: The login and data persistence should work entirely on the front-end using random credentials for login, with no backend integration required.
