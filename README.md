# Welcome to the Integrating With HubSpot I: Foundations Practicum

This repository is for the Integrating With HubSpot I: Foundations course. This practicum is one of two requirements for receiving your Integrating With HubSpot I: Foundations certification. You must also take the exam and receive a passing grade (at least 75%).

To read the full directions, please go to the [practicum instructions](https://app.hubspot.com/academy/l/tracks/1092124/1093824/5493?language=en).

**Developer test account Contacts:** https://app.hubspot.com/contacts/50481734/objects/0-1/views/all/list

Custom objects are unavailable in this account, so this practicum uses Contacts for the Mini Dachshund records. The table shows contacts with a Name value in `dachshund_name`, alongside `color` and `personality`.

Run `npm install`, add `HUBSPOT_SERVICE_KEY=your_service_key` to a local `.env` file, then run `node index.js`. Open http://localhost:3000. The service key needs `crm.objects.contacts.read` and `crm.objects.contacts.write`.

___
## Tips:
- Commit to your repository often. Even if you make small tweaks to your code, it’s best to be committing to your repository frequently.
- The subject of the custom object is up to you. Feel free to get creative!
- Keep the service key in a local .env file.
- Ensure you re-merge any working branches into the main branch.
- DO NOT ADD YOUR SERVICE KEY TO YOUR REPOSITORY. 

## Pre-requisites:
- Using [Node](https://nodejs.org/en/download) and node packages
- Using [Express](https://expressjs.com/en/starter/installing.html)
- Using [Axios](https://axios-http.com/docs/intro)
- Using [Pug templating system](https://pugjs.org/api/getting-started.html)
- Using the command line
- Using [Git and GitHub](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)

## Requirements
- All work must be your own. During the grading process we will check the revision history. Submissions that do not meet this requirement will not be considered.
- You must have at least two new routes in your index.js file and one new pug template for the homepage.
- You must create a developer test account and link to it in your README.md file. Submissions that do not meet this requirement will not be considered.
