let APP_CONFIG = {
  'DEMO_APP_CLIENT_SECURE_CERT': './cert/sample-private-cert.p12',
  'DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE': 'DemoApp',
  'MYINFO_SIGNATURE_CERT_PUBLIC_CERT': './cert/sample-public-cert.pem',
  'DEMO_APP_CALLBACK_URL': 'http://localhost:3001/callback',
  'DEMO_APP_PURPOSE': 'demonstrating MyInfo APIs',
  'DEMO_APP_SCOPES': 'uinfin,name,sex,race',
  'MYINFO_API_AUTHORISE': 'https://test.api.myinfo.gov.sg/com/v3/authorise'
}

module.exports.APP_CONFIG = APP_CONFIG;
module.exports.MYINFO_CONNECTOR_CONFIG = function (clientId,secretKey) {
  return {
    'MYINFO_SIGNATURE_CERT_PUBLIC_CERT': APP_CONFIG.MYINFO_SIGNATURE_CERT_PUBLIC_CERT,
    'CLIENT_ID': clientId,
    'CLIENT_SECRET': secretKey,
    'CLIENT_SECURE_CERT': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT,
    'CLIENT_SECURE_CERT_PASSPHRASE': APP_CONFIG.DEMO_APP_CLIENT_SECURE_CERT_PASSPHRASE,
    'REDIRECT_URL': APP_CONFIG.DEMO_APP_CALLBACK_URL,
    'ATTRIBUTES': APP_CONFIG.DEMO_APP_SCOPES,
  
    'ENVIRONMENT': 'TEST',
    'TOKEN_URL': 'https://test.api.myinfo.gov.sg/com/v3/token',
    'PERSON_URL': 'https://test.api.myinfo.gov.sg/com/v3/person',
  
    'DEBUG_LEVEL': 'info'
  }
};