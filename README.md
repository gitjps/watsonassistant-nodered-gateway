# Overview of the Watson Assistant Node-RED Gateway
Programmatic calls can be used in the Watson Assistant (WA) to perform calculations, get real-time information from backend systems, display it or control the dialog flow etc. Typically the Cloud Functions service is used to provide such capabilities to the WA service. Although Cloud Functions is very convenient and easy to use, it requires some programming proficiency. The solution shows how the visual programming tool Node-RED can be used for the application logic and Cloud Functions as a gateway between the IBM Watson Assistant service and the Node-RED service.

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
 - Enter "Wie spät ist es?" (what's the time now) and hit Enter, response is "Es ist jetzt 08:37:08 GMT"
 
# Node-RED Flow

In the Node-RED flow the request from the gateway is routed to the corresponding sub-flow, depending on the field msg.payload.request.

![Node-RED Flow](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/node-red-flow.jpg)

In the demo case there's only one (time), which calls a simulated time service within the same flow.
