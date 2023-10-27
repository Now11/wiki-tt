# Wikipedia AT (project for testing purposes)

### Test Case:

    [User Profile/Settings/Internationalisation]: When user changes language, saves the changes, then the interface changes to the appropriate language

    Steps:
      1. Authorize with user
      2. Go to Profile/Preferences/Internationalisation section
      3. Change language
      4. Save Changes

    Expected Result:
        User interface language is changed

### Setup

1. Create `.env` file (see `.env.example` for examples)
2. Build docker image `docker build -t pw_tests -f Test.Dockerfile .`
3. Make sure Your Wiki account language is set to `en`(English) or `uk`(Ukrainian)

### Run test

1. Run docker container using command ``docker run --rm -v `pwd`/report:/app/report pw_tests`` (Use `wsl` or `linux`)

### Results

1. Test Results will appear in `report` folder
2. `npm install` packeges locally in case if You want to open report by `npx playwright show-report report` command
