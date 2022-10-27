# 03 JavaScript: Password Generator

## Your Task

This week's Challenge requires you to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes.

The password can include special characters. If you’re unfamiliar with these, see this [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Reflection

As indicated above, I was presented with some starter code and asked to code a password generator meeting the above listed criteria. This project required me to break down the challenge into smaller pieces and write code specific to each spec. I ran into problems with getting the program to run more than once until I added a function to clear the previous results. I also had to find ways to evaluate whether the user selected the appropriate criteria and to create opportunities for the user to correct invalid inputs. I also found out how to allow the user to escape at the number selection prompts for improved user experience.

## Screenshot
![Deployed Password Generator screenshot - Desktop](./Assets/Images/password-generator-screenshot.png)


## Deployed Application Link
https://mfrabott.github.io/password-generator/