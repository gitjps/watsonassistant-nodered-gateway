# Overview of the Watson Assistant Node-RED Gateway
Programmatic calls can be used in the Watson Assistant (WA) to perform calculations, get real-time information from backend systems, display it or control the dialog flow etc. Typically the Cloud Functions service is used to provide such capabilities to the WA service. Although Cloud Functions is very convenient and easy to use, it requires some programming proficiency. In some cases it might make sense to use Node-RED instead as a visual programming tool to implement the business logic. In these cases Cloud Functions is still necessary as a gateway between the IBM Watson Assistant service and the Node-RED service.

This solution describes how to use Node-RED flows leveraging an IBM Cloud Functions gateway.

![Node-RED Gateway](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/gw.jpg)

# Instructions
- create a Watson Assistant service and Cloud Functions web action as described here  Functions is described [here](https://cloud.ibm.com/docs/services/assistant?topic=assistant-dialog-actions#dialog-actions)
- import the WA JSON file [skill-demo.json](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/skill-demo.json) and use the gateway [noderedgateway.js](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/noderedgateway.js)
- create a Node-RED instance on IBM Cloud and import the Node-RED Flow [noderedflow.json](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/noderedflow.json)
- in the Cloud function enable the Web action
- under Endpoints copy the API key and save it somewhere secure
- test the web action calling the Node-RED flow using parameters, which you can find in the dialog node *time* , don't forget to adapt the target_hostname (your Node-RED instance)
- delete the web actions parameters after the succesful test
- in the WA Dialog node adapt the action (package) name : cloudfoundryorg_cloudfoundryspace
- in the WA Dialog node set the target_hostname to the hostname of your Node-RED instance
- in the Watson Assistant service click on Try it out!
- click on Manage Context and enter the Clound Functions credentials : $private: {"my_credentials":{"api_key":"<user>:<password>"}}
 - Enter "Wie spät ist es?" (what's the time now) and hit Enter
 - click on Manage Context again, $my_result should look like {"gw_result":{"message":"It's 12:48:33 now!","result":"success","time":"12:48:33"}}
  
