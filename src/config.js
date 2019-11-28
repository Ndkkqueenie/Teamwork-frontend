export default {MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "teamwork-app-upload"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://zz6y16ohpi.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_jOMcS7Rnj",
    APP_CLIENT_ID: "2lo7mqn4seeut7rekt1hin7e9q",
    IDENTITY_POOL_ID: "us-east-2:a8d2f70e-f0ac-4886-84ca-bf72e5204426"
  }
};