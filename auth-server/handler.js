'use strict';

const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"]; //Sets access levels; info displayed to users in consent screen
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env; //process.env points to info inside config.json file. Storing this data inside this variable ensures API secrets stay hidden
const redirect_uris = [
  "https://Ntsubi.github.io/meet/"
];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => { //getAuthURL function logic was created & exported using Node.js module.exports
  /*Scopes array is passed to the `scope` option. 
  */
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};