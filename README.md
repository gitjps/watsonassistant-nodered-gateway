# watsonassistant-nodered-gateway
Cloud Functions (OpenWhisk) based gateway to make programmatic calls from IBM Watson Assistant to Node-RED

Programmatic calls can be used in Watson Assistant to get real-time information from backend systems, display it or control the dialog flow. 
This solution describes how to use Node-RED flows leveraging an IBM Cloud Functions gateway.

![Node-RED Gateway](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/gw.jpg)

# Test
- create a Watson Assistant service and Cloud Functions web action as described here  Functions is described [here](https://cloud.ibm.com/docs/services/assistant?topic=assistant-dialog-actions#dialog-actions)
- import the WA JSON file [skill-demo.json](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/skill-demo.json) and use the gateway [noderedgateway.js](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/noderedgateway.js)
- create a Node-RED instance on IBM Cloud and import the Node-RED Flow [noderedflow.json](https://github.com/gitjps/watsonassistant-nodered-gateway/blob/master/noderedflow.json)
- in the WA Dialog node adapt the action name, the target_hostname
- in the Cloud function anable the Web action
