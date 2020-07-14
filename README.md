## DevSpace.

### A social network catering specifically towards developers.

#### Note: You will require your own mongoDB cluster and github access token in order to run the application.

#### BUILDING THE PROJECT:

1. Clone the repo using this command

   ```
   git clone https://github.com/knightvertrag/DevSpace.git
   ```

1. Run the following command to install all the required dependencies

   ```
   npm install
   ```

1. Rename `dummy_default.json` to `default.json` and fill in the default values accordingly.
1. The project uses the concurrently package to simultaneously run the api server as well as serve the react frontend. The script to run the project is

```
npm run dev
```
