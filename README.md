
Collaborators:
@Bomibear
Travis Cox
Joachen Busch
Fabian Brooks 
Renee Messick

# Step by Step Instructions

- Clone this [repo](https://github.com/codefellows/deployment-app-node)
- Create a .env file. Set `PORT=8081`
- Copy this chunk of code into index.js:

```
// APP dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Global vars
const PORT = process.env.PORT;

// Make the server
const app = express();
app.use(cors());
```
- In terminal, in that directory just created, type ```npm install```
- Then run ```npm install dotenv cors express```
- Install Httpie. On Mac use Brew and the command is ```brew install httpie```. If you haven't used Brew in awhile, it'll take a awhile to install httpie.
  - Windows user can use ```npm install httpie```
- Run the server with the command ```npm start```
![site deployment success](/resources/initialSetupTest.JPG)
- Open another terminal tab. From the same directory, type in `http :8081`
![site deployment success](/resources/httpRunningServer.JPG)
- Output should be

```
{
  "test": "pass",
  "v": 2
}
```

- Navigate to AWS Elasticbeanstalk
  - create a new env
  - select Node.js as the language
  - leave the other settings as default
- Navigate to AWS CodePipeline
  - in pipeline, create a new CodePipeline
  ![site deployment success](/resources/pipeline-step1.JPG)
  - connect the pipeline to your github repo
   ![site deployment success](/resources/pipeline-step2.JPG)
  - create a new user instead of using an existing one
  - connect to the AWS elasticbeanstalk env that was created earlier.
   ![site deployment success](/resources/pipeline-step3-step4.JPG)
  - You should see something like this:
    ![pipeline successful setup](/resources/pipelineSuccess.png)
- in the terminal, within the directory for this code body, zip up the code so that it can be uploaded to ElasticBeanstalk with this command: `zip -r pipeline.zip .`
- Back to ElasticBeanstalk
  - upload that zip file

If all goes well, the link on the ElasticBeanstalk page should load the information from index.js which was the JSON output shown above. The deployed link is [here](http://deploymentappnode-env.2j8zpbdnds.us-west-2.elasticbeanstalk.com/) and that will look like this ![site deployment success](/resources/deployedSiteSuccess.png)

- Now change the output of server.js to something like this:
  ![change the code](/resources/changingTheCodeToSaySomething.png)
- ACP changes to master, which will trigger the CodePipeline to look like this ![code pipeline redeploy](/resources/pipelineRedeploy.png)
- Go back to the deployed site and the changes will now appear and look like this ![changes are deployed](/resources/changesAreDeployed.png)

# Proving the Pipeline Works

![pipeline success](/resources/pipelineSuccess.png)

Before deploying changes:

![before code changes](/resources/deployedSiteSuccess.png)

After deploying changes:

![changes are deployed](/resources/changesAreDeployed.png)

# Proving Reliability

![pipeline redeploy](/resources/pipelineRedeploy.png)
