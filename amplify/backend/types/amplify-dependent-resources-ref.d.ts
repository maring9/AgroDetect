export type AmplifyDependentResourcesAttributes = {
  "api": {
    "agrodetect": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "auth": {
    "AgroDetect": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "HostedUIDomain": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "OAuthMetadata": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "agrodetectInference": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "agrodetectInferenceImages": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}