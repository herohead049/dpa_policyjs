var cdlib = require('cdlib');
var argv = require('minimist')(process.argv.slice(2));


var dpaArgs = {
    node: "",
    message: "",
    severity: "",
    eventName: "",
    alertID: "",
    eventID: "",
    firstOccurrence: "",
    lastOccurrence: "",
    count: "",
    sourceView: "",
    sourceNode: "",
    rule: "",
    toString: function () {
        return JSON.stringify(this);
    }
};

dpaArgs.node = argv._[0];
dpaArgs.message = argv._[1];
dpaArgs.severity = argv._[2];
dpaArgs.eventName = argv._[3];
dpaArgs.alertID = argv._[4];
dpaArgs.eventID = argv._[5];
dpaArgs.firstOccurrence = argv._[6];
dpaArgs.lastOccurrence = argv._[7];
dpaArgs.count = argv._[8];
dpaArgs.sourceView = argv._[9];
dpaArgs.sourceNode = argv._[10];
dpaArgs.rule = argv._[11];


console.log(dpaArgs);


function sendHtmlText(test) {
    'use strict';
        //cdlib.msgEmail.smtpServer = 'localhost'
        cdlib.msgEmail.htmlData = test;
        cdlib.msgEmail.subject = dpaArgs.eventName;
        cdlib.msgEmail.to = "craig.david@mt.com";
        cdlib.msgEmail.sendToRabbit();

}

sendHtmlText(dpaArgs.toString());

