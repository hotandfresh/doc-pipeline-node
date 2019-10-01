# Step by Step Instructions

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

- Install Httpie on a mac. On windows use Brew and the command is "brew install httpie"
- Run the server with the command "npm start"
- Open another terminal tab. From the same directory, type in `http :8081`
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
  - connect the pipeline to your github repo
  - create a new user instead of using an existing one
  - connect to the AWS elasticbeanstalk env that was created earlier.
  - You should see something like this:
    ![pipeline successful setup](/resources/pipelineSuccess.png)
- in the terminal, within the directory for this code body, zip up the code so that it can be uploaded to ElasticBeanstalk with this command: `zip -r pipeline.zip .`
- Back to ElasticBeanstalk
  - upload that zip file

If all goes well, the link on the ElasticBeanstalk page should load the information from index.js which was the output shown above. The deployed link is [here](http://deploymentappnode-env.2j8zpbdnds.us-west-2.elasticbeanstalk.com/) and that will look like this ![site deployment success](/resources/deployedSiteSuccess.png)

- Now change the output of server.js to something like this:
  ![change the code](/resources/changingTheCodeToSaySomething.png)
- ACP changes to master, which will trigger the CodePipeline to look like this ![code pipeline redeploy](/resources/pipelineRedeploy.png)
- Go back to the deployed site and the changes will now appear and look like this ![changes are deployed](/resources/changesAreDeployed.png)

# Troubleshooting tips

## Potential Roadblocks or Trouble Spots

# Proving the Pipeline Works

![pipeline success](/resources/pipelineSuccess.png)

Before deploying changes:

![before code changes](/resources/deployedSiteSuccess.png)

After deploying changes:

![changes are deployed](/resources/changesAreDeployed.png)

# Proving Reliability

![pipeline redeploy](/resources/pipelineRedeploy.png)
