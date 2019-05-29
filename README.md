# Watson Assistant Node-RED Gateway
Programmatic calls can be used in the Watson Assistant (WA) to perform calculations, get real-time information from backend systems, display it or control the dialog flow etc. (see [chatbot phone handover example](https://github.com/gitjps/chatbot_phone_handover). Typically the Cloud Functions service is used to provide such capabilities to the WA service. Although Cloud Functions is very convenient and easy to use, it requires some programming proficiency. 

The solution shows how the visual programming tool Node-RED can be used for the application logic and Cloud Functions as a gateway between the IBM Watson Assistant service and the Node-RED service.

![Node-RED Gateway](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/gw.jpg)

# Complete flow
- WA determines the intent (e.g. "time") of an user input and extracts potentially entities (currently not used)
- depending on the intent a WA forms an object that is sent to the Cloud Functions action and subsequentially to the Node-RED flow
- the object contains a field *request* (should be identical to the intent) 
- in the Node-RED flow the request from the gateway is routed to the corresponding sub-flow using a switch node, depending on the field msg.payload.request. In that sub-flow all the application logic can be performed and the result returned to the gateway and WA. In this case the logic is rasther simple, it just calls another service which returns the current time.

![Node-RED Flow](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/node-red-flow.jpg)

**Remarks**
- Watson Assistant has a built-in now() function, so it does not need an external time service
- calling external services instead if the Node-RED time service is possible as well,  of course
- several options are possible for the implementation of the Dialog Control, see [Chatbot with Telegram](https://github.com/gitjps/chatbot-with-telegram) for an example using Node-RED

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
 
