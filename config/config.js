let APP_CONFIG = {
  'DEMO_APP_CLIENT_ID': 'STG2-MYINFO-DEMO-APP',
  'DEMO_APP_CLIENT_SECRET': 'outzuu7n3bxzcvdyrv98y3picshnkydf1r4ybwas',
  'DEMO_APP_CLIENT_SECURE_CERT': './cert/je-private-cert.p12',
  'DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE': 'DemoApp',
  'DEMO_APP_CALLBACK_URL': 'http://localhost:3001/callback',
  'DEMO_APP_PURPOSE': 'demonstrating MyInfo APIs',
  'DEMO_APP_SCOPES': 'uinfin,name,sex,race',
  'MYINFO_API_AUTHORISE': 'https://test.api.myinfo.gov.sg/com/v3/authorise'
}

let MYINFO_CONNECTOR_CONFIG = {
  'MYINFO_SIGNATURE_CERT_PUBLIC_CERT': './cert/je-public-cert.pem',

  'CLIENT_ID': APP_CONFIG.DEMO_APP_CLIENT_ID, 
  'CLIENT_SECRET': APP_CONFIG.DEMO_APP_CLIENT_SECRET,
  'CLIENT_SECURE_CERT': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT, 
  'CLIENT_SECURE_CERT_PASSPHRASE': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE, 
  'REDIRECT_URL': APP_CONFIG.DEMO_APP_CALLBACK_URL, 
  'ATTRIBUTES': APP_CONFIG.DEMO_APP_SCOPES,
 
  'ENVIRONMENT': 'TEST',
  'TOKEN_URL': 'https://test.api.myinfo.gov.sg/com/v3/token',
  'PERSON_URL': 'https://test.api.myinfo.gov.sg/com/v3/person',


  //Proxy parameters (OPTIONAL) 
  'USE_PROXY': 'N', //Indicate whether proxy url is used. i.e. Y or N
  'PROXY_TOKEN_URL': '', //Configure your proxy url here, if any.
  'PROXY_PERSON_URL': '', //Configure your proxy url here, if any.

  'DEBUG_LEVEL': 'info'
}

module.exports.APP_CONFIG = APP_CONFIG;
module.exports.MYINFO_CONNECTOR_CONFIG = MYINFO_CONNECTOR_CONFIG;