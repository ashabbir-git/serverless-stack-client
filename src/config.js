export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	STRIPE_KEY: "pk_test_51HZP9rHPP6g3dFGKhkMYGHYKQLEeUAFpXPipOdAFuPG4VcOavRB1GCeSSHqQlP9IHCK39gqRyNghQk4cdULE4Y7e00Z6ElO9Qo",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads-shabbir"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2lnplv3el0.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_CVHcgUW5l",
    APP_CLIENT_ID: "5rokq18l5qmfgo874fibes6oen",
    IDENTITY_POOL_ID: "us-east-1:376c8767-b86f-4a32-8bf9-b503bff7da34"
  }
};