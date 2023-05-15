let APP_CONFIG = {
  'DEMO_APP_CLIENT_ID': 'STG2-MYINFO-DEMO-APP',
  'DEMO_APP_CLIENT_SECRET': 'outzuu7n3bxzcvdyrv98y3picshnkydf1r4ybwas',
  'DEMO_APP_CLIENT_SECURE_CERT': {
    'DEFAULT': './cert/je-private-cert.p12',
    'JE': './cert/je-private-cert.p12'
  },
  'DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE': {
    'DEFAULT': 'DemoApp',
    'JE': 'DemoApp'
  },
  'MYINFO_SIGNATURE_CERT_PUBLIC_CERT': {
    'DEFAULT': './cert/je-public-cert.pem',
    'JE': './cert/je-public-cert.pem'
  },
  'DEMO_APP_CALLBACK_URL': {
    'DEFAULT': 'http://localhost:3001/callback',
    'JE': 'http://localhost:3001/je/callback'
  },
  'DEMO_APP_PURPOSE': 'demonstrating MyInfo APIs',
  'DEMO_APP_SCOPES': 'uinfin,name,sex,race',
  'MYINFO_API_AUTHORISE': 'https://test.api.myinfo.gov.sg/com/v3/authorise'
}

module.exports.APP_CONFIG = APP_CONFIG;
//module.exports.MYINFO_CONNECTOR_CONFIG = MYINFO_CONNECTOR_CONFIG;
module.exports.MYINFO_CONNECTOR_CONFIG = function (branchName) {
  return {
    'MYINFO_SIGNATURE_CERT_PUBLIC_CERT': APP_CONFIG.MYINFO_SIGNATURE_CERT_PUBLIC_CERT[branchName],
    'CLIENT_ID': APP_CONFIG.DEMO_APP_CLIENT_ID,
    'CLIENT_SECRET': APP_CONFIG.DEMO_APP_CLIENT_SECRET,
    'CLIENT_SECURE_CERT': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT[branchName],
    'CLIENT_SECURE_CERT_PASSPHRASE': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE[branchName],
    'REDIRECT_URL': APP_CONFIG.DEMO_APP_CALLBACK_URL[branchName],
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
}